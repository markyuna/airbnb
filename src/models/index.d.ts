import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly bed: number;
  readonly bedroom: number;
  readonly maxGuests: number;
  readonly oldPrice: number;
  readonly newPrice: number;
  readonly latitude: number;
  readonly longitude: number;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly bed: number;
  readonly bedroom: number;
  readonly maxGuests: number;
  readonly oldPrice: number;
  readonly newPrice: number;
  readonly latitude: number;
  readonly longitude: number;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}