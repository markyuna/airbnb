import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  // const [posts, setPosts] = useState([]);
  const route = useRoute();
  const { guests, viewport } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests
                },
                latitude: {
                  between: [
                    viewport.southwest.lat,
                    viewport.northeast.lat,
                  ],
                },
                longitude: {
                  between: [
                    viewport.southwest.lng,
                    viewport.northeast.lng,
                  ],
                }
              }
            }
          })
        );

        setPosts(postsResult.data.listPosts.items);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [guests, viewport]);

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        }
      }}
    >
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
