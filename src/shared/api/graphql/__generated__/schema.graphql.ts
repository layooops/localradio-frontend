export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Time: { input: any; output: any };
  Upload: { input: any; output: any };
}

export interface About {
  __typename?: 'About';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  textEn?: Maybe<Scalars['String']['output']>;
  textRu?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface AboutEntity {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface AboutEntityResponse {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
}

export interface AboutInput {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  textEn?: InputMaybe<Scalars['String']['input']>;
  textRu?: InputMaybe<Scalars['String']['input']>;
}

export interface Artist {
  __typename?: 'Artist';
  description?: Maybe<Scalars['String']['output']>;
  guest?: Maybe<GuestEntity>;
  link?: Maybe<Scalars['String']['output']>;
  show?: Maybe<ShowEntity>;
  title?: Maybe<Scalars['String']['output']>;
}

export interface BooleanFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ComponentDateEventDate {
  __typename?: 'ComponentDateEventDate';
  eventDate?: Maybe<Scalars['Date']['output']>;
  eventTimeEnd?: Maybe<Scalars['Time']['output']>;
  eventTimeStart?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
}

export interface ComponentDateEventDateFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentDateEventDateFiltersInput>>>;
  eventDate?: InputMaybe<DateFilterInput>;
  eventTimeEnd?: InputMaybe<TimeFilterInput>;
  eventTimeStart?: InputMaybe<TimeFilterInput>;
  not?: InputMaybe<ComponentDateEventDateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDateEventDateFiltersInput>>>;
}

export interface ComponentDateEventDateInput {
  eventDate?: InputMaybe<Scalars['Date']['input']>;
  eventTimeEnd?: InputMaybe<Scalars['Time']['input']>;
  eventTimeStart?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface ComponentEventEvent {
  __typename?: 'ComponentEventEvent';
  date?: Maybe<ComponentDateEventDate>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  location?: Maybe<ComponentLocationLocation>;
  schedule?: Maybe<Array<Maybe<ComponentEventSchedule>>>;
}

export interface ComponentEventEventScheduleArgs {
  filters?: InputMaybe<ComponentEventScheduleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ComponentEventEventFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  date?: InputMaybe<ComponentDateEventDateFiltersInput>;
  info?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<ComponentLocationLocationFiltersInput>;
  not?: InputMaybe<ComponentEventEventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventEventFiltersInput>>>;
  schedule?: InputMaybe<ComponentEventScheduleFiltersInput>;
}

export interface ComponentEventEventInput {
  date?: InputMaybe<ComponentDateEventDateInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<ComponentLocationLocationInput>;
  schedule?: InputMaybe<Array<InputMaybe<ComponentEventScheduleInput>>>;
}

export interface ComponentEventOrTypeEvent {
  __typename?: 'ComponentEventOrTypeEvent';
  eventDate?: Maybe<ComponentDateEventDate>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  location?: Maybe<ComponentLocationLocation>;
  schedule?: Maybe<Array<Maybe<ComponentEventOrTypeEventInfo>>>;
}

export interface ComponentEventOrTypeEventScheduleArgs {
  filters?: InputMaybe<ComponentEventOrTypeEventInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ComponentEventOrTypeEventInfo {
  __typename?: 'ComponentEventOrTypeEventInfo';
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface ComponentEventOrTypeEventInfoFiltersInput {
  and?: InputMaybe<
    Array<InputMaybe<ComponentEventOrTypeEventInfoFiltersInput>>
  >;
  info?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventOrTypeEventInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventOrTypeEventInfoFiltersInput>>>;
}

export interface ComponentEventOrTypeNews {
  __typename?: 'ComponentEventOrTypeNews';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
}

export interface ComponentEventSchedule {
  __typename?: 'ComponentEventSchedule';
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
}

export interface ComponentEventScheduleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentEventScheduleFiltersInput>>>;
  info?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventScheduleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventScheduleFiltersInput>>>;
}

export interface ComponentEventScheduleInput {
  id?: InputMaybe<Scalars['ID']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentLinkComponentLinkComponent {
  __typename?: 'ComponentLinkComponentLinkComponent';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
}

export interface ComponentLinkComponentLinkComponentFiltersInput {
  and?: InputMaybe<
    Array<InputMaybe<ComponentLinkComponentLinkComponentFiltersInput>>
  >;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLinkComponentLinkComponentFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentLinkComponentLinkComponentFiltersInput>>
  >;
}

export interface ComponentLinkComponentLinkComponentInput {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentLinksToMixesLink {
  __typename?: 'ComponentLinksToMixesLink';
  id: Scalars['ID']['output'];
  soundcloudLink?: Maybe<Scalars['String']['output']>;
  youtubeLink?: Maybe<Scalars['String']['output']>;
}

export interface ComponentLinksToMixesLinkFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentLinksToMixesLinkFiltersInput>>>;
  not?: InputMaybe<ComponentLinksToMixesLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLinksToMixesLinkFiltersInput>>>;
  soundcloudLink?: InputMaybe<StringFilterInput>;
  youtubeLink?: InputMaybe<StringFilterInput>;
}

export interface ComponentLinksToMixesLinkInput {
  id?: InputMaybe<Scalars['ID']['input']>;
  soundcloudLink?: InputMaybe<Scalars['String']['input']>;
  youtubeLink?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentLinksToSocialsLinksToSocials {
  __typename?: 'ComponentLinksToSocialsLinksToSocials';
  BCLink?: Maybe<Scalars['String']['output']>;
  IGLink?: Maybe<Scalars['String']['output']>;
  SCLink?: Maybe<Scalars['String']['output']>;
  TGLink?: Maybe<Scalars['String']['output']>;
  VKLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
}

export interface ComponentLinksToSocialsLinksToSocialsFiltersInput {
  BCLink?: InputMaybe<StringFilterInput>;
  IGLink?: InputMaybe<StringFilterInput>;
  SCLink?: InputMaybe<StringFilterInput>;
  TGLink?: InputMaybe<StringFilterInput>;
  VKLink?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<
    Array<InputMaybe<ComponentLinksToSocialsLinksToSocialsFiltersInput>>
  >;
  not?: InputMaybe<ComponentLinksToSocialsLinksToSocialsFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentLinksToSocialsLinksToSocialsFiltersInput>>
  >;
}

export interface ComponentLinksToSocialsLinksToSocialsInput {
  BCLink?: InputMaybe<Scalars['String']['input']>;
  IGLink?: InputMaybe<Scalars['String']['input']>;
  SCLink?: InputMaybe<Scalars['String']['input']>;
  TGLink?: InputMaybe<Scalars['String']['input']>;
  VKLink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface ComponentLocationLocation {
  __typename?: 'ComponentLocationLocation';
  id: Scalars['ID']['output'];
  locationLink?: Maybe<Scalars['String']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
}

export interface ComponentLocationLocationFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentLocationLocationFiltersInput>>>;
  locationLink?: InputMaybe<StringFilterInput>;
  locationName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocationLocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocationLocationFiltersInput>>>;
}

export interface ComponentLocationLocationInput {
  id?: InputMaybe<Scalars['ID']['input']>;
  locationLink?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentMetaMeta {
  __typename?: 'ComponentMetaMeta';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
}

export interface ComponentMetaMetaFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentMetaMetaFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMetaMetaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMetaMetaFiltersInput>>>;
}

export interface ComponentOrderItemsOrderItems {
  __typename?: 'ComponentOrderItemsOrderItems';
  id: Scalars['ID']['output'];
  product?: Maybe<ShopItemEntityResponse>;
  quantity: Scalars['Int']['output'];
}

export interface ComponentOrderItemsOrderItemsFiltersInput {
  and?: InputMaybe<
    Array<InputMaybe<ComponentOrderItemsOrderItemsFiltersInput>>
  >;
  not?: InputMaybe<ComponentOrderItemsOrderItemsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOrderItemsOrderItemsFiltersInput>>>;
  product?: InputMaybe<ShopItemFiltersInput>;
  quantity?: InputMaybe<IntFilterInput>;
}

export interface ComponentOrderItemsOrderItemsInput {
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
}

export interface ComponentPageMainPage {
  __typename?: 'ComponentPageMainPage';
  SEO?: Maybe<ComponentSeoSeo>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
}

export interface ComponentPagePage {
  __typename?: 'ComponentPagePage';
  id: Scalars['ID']['output'];
}

export interface ComponentReleaseLinksLinks {
  __typename?: 'ComponentReleaseLinksLinks';
  appleMusic?: Maybe<Scalars['String']['output']>;
  bandcamp?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  soundcloud?: Maybe<Scalars['String']['output']>;
  spotify?: Maybe<Scalars['String']['output']>;
  vkMusic?: Maybe<Scalars['String']['output']>;
  yandexMusic?: Maybe<Scalars['String']['output']>;
  youtubeMusic?: Maybe<Scalars['String']['output']>;
}

export interface ComponentReleaseLinksLinksFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentReleaseLinksLinksFiltersInput>>>;
  appleMusic?: InputMaybe<StringFilterInput>;
  bandcamp?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentReleaseLinksLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReleaseLinksLinksFiltersInput>>>;
  soundcloud?: InputMaybe<StringFilterInput>;
  spotify?: InputMaybe<StringFilterInput>;
  vkMusic?: InputMaybe<StringFilterInput>;
  yandexMusic?: InputMaybe<StringFilterInput>;
  youtubeMusic?: InputMaybe<StringFilterInput>;
}

export interface ComponentReleaseLinksLinksInput {
  appleMusic?: InputMaybe<Scalars['String']['input']>;
  bandcamp?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  soundcloud?: InputMaybe<Scalars['String']['input']>;
  spotify?: InputMaybe<Scalars['String']['input']>;
  vkMusic?: InputMaybe<Scalars['String']['input']>;
  yandexMusic?: InputMaybe<Scalars['String']['input']>;
  youtubeMusic?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentScheduleArtist {
  __typename?: 'ComponentScheduleArtist';
  description?: Maybe<Scalars['String']['output']>;
  guest?: Maybe<GuestEntityResponse>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  show?: Maybe<ShowEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
}

export interface ComponentScheduleArtistFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentScheduleArtistFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  guest?: InputMaybe<GuestFiltersInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentScheduleArtistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentScheduleArtistFiltersInput>>>;
  show?: InputMaybe<ShowFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
}

export interface ComponentScheduleArtistInput {
  description?: InputMaybe<Scalars['String']['input']>;
  guest?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  show?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface ComponentScheduleSchedule {
  __typename?: 'ComponentScheduleSchedule';
  artist?: Maybe<ComponentScheduleArtist>;
  id: Scalars['ID']['output'];
  time?: Maybe<Scalars['Time']['output']>;
}

export interface ComponentScheduleScheduleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ComponentScheduleScheduleFiltersInput>>>;
  artist?: InputMaybe<ComponentScheduleArtistFiltersInput>;
  not?: InputMaybe<ComponentScheduleScheduleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentScheduleScheduleFiltersInput>>>;
  time?: InputMaybe<TimeFilterInput>;
}

export interface ComponentScheduleScheduleInput {
  artist?: InputMaybe<ComponentScheduleArtistInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  time?: InputMaybe<Scalars['Time']['input']>;
}

export interface ComponentSeoSeo {
  __typename?: 'ComponentSeoSeo';
  Meta?: Maybe<Array<Maybe<ComponentMetaMeta>>>;
  id: Scalars['ID']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
}

export interface ComponentSeoSeoMetaArgs {
  filters?: InputMaybe<ComponentMetaMetaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface Cover {
  __typename?: 'Cover';
  url: Scalars['String']['output'];
}

export interface CustomDate {
  __typename?: 'CustomDate';
  day: Scalars['String']['output'];
  week: Scalars['String']['output'];
}

export interface DateFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
}

export interface DateTimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
}

export enum Enum_Release_Type {
  Album = 'Album',
  Compilation = 'Compilation',
  Ep = 'Ep',
  Mixtape = 'Mixtape',
  Single = 'Single',
}

export enum Enum_Shoporder_Status {
  Cancelled = 'cancelled',
  Created = 'created',
  Delivered = 'delivered',
  DeliveredFinish = 'delivered_finish',
  DeliveryArrived = 'delivery_arrived',
  OnTheWay = 'on_the_way',
  PaymentSuccess = 'payment_success',
  PickupArrived = 'pickup_arrived',
  Pickuped = 'pickuped',
  Refunded = 'refunded',
}

export interface Event {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventInfo: ComponentEventEvent;
  image: UploadFileEntityResponse;
  mixes?: Maybe<MixRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface EventMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface EventEntity {
  __typename?: 'EventEntity';
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface EventEntityResponse {
  __typename?: 'EventEntityResponse';
  data?: Maybe<EventEntity>;
}

export interface EventEntityResponseCollection {
  __typename?: 'EventEntityResponseCollection';
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
}

export interface EventFiltersInput {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eventInfo?: InputMaybe<ComponentEventEventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  mixes?: InputMaybe<MixFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface EventInput {
  eventInfo?: InputMaybe<ComponentEventEventInput>;
  image?: InputMaybe<Scalars['ID']['input']>;
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface EventSchedule {
  __typename?: 'EventSchedule';
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  location?: Maybe<ComponentLocationLocation>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  schedule: Array<Maybe<ComponentScheduleSchedule>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface EventScheduleScheduleArgs {
  filters?: InputMaybe<ComponentScheduleScheduleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface EventScheduleEntity {
  __typename?: 'EventScheduleEntity';
  attributes?: Maybe<EventSchedule>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface EventScheduleEntityResponse {
  __typename?: 'EventScheduleEntityResponse';
  data?: Maybe<EventScheduleEntity>;
}

export interface EventScheduleEntityResponseCollection {
  __typename?: 'EventScheduleEntityResponseCollection';
  data: Array<EventScheduleEntity>;
  meta: ResponseCollectionMeta;
}

export interface EventScheduleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<EventScheduleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<ComponentLocationLocationFiltersInput>;
  not?: InputMaybe<EventScheduleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventScheduleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  schedule?: InputMaybe<ComponentScheduleScheduleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface EventScheduleInput {
  cover?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<ComponentLocationLocationInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  schedule?: InputMaybe<Array<InputMaybe<ComponentScheduleScheduleInput>>>;
}

export interface FileInfoInput {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface FloatFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
}

export type GenericMorph =
  | About
  | ComponentDateEventDate
  | ComponentEventEvent
  | ComponentEventOrTypeEvent
  | ComponentEventOrTypeEventInfo
  | ComponentEventOrTypeNews
  | ComponentEventSchedule
  | ComponentLinkComponentLinkComponent
  | ComponentLinksToMixesLink
  | ComponentLinksToSocialsLinksToSocials
  | ComponentLocationLocation
  | ComponentMetaMeta
  | ComponentOrderItemsOrderItems
  | ComponentPageMainPage
  | ComponentPagePage
  | ComponentReleaseLinksLinks
  | ComponentScheduleArtist
  | ComponentScheduleSchedule
  | ComponentSeoSeo
  | Event
  | EventSchedule
  | Genre
  | Guest
  | I18NLocale
  | Mix
  | Mood
  | Release
  | ShopCategory
  | ShopItem
  | ShopOrder
  | Show
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | YoutubeLink;

export interface Genre {
  __typename?: 'Genre';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  mixes?: Maybe<MixRelationResponseCollection>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface GenreMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GenreEntity {
  __typename?: 'GenreEntity';
  attributes?: Maybe<Genre>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface GenreEntityResponse {
  __typename?: 'GenreEntityResponse';
  data?: Maybe<GenreEntity>;
}

export interface GenreEntityResponseCollection {
  __typename?: 'GenreEntityResponseCollection';
  data: Array<GenreEntity>;
  meta: ResponseCollectionMeta;
}

export interface GenreFiltersInput {
  and?: InputMaybe<Array<InputMaybe<GenreFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mixes?: InputMaybe<MixFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GenreFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GenreFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface GenreInput {
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface GenreRelationResponseCollection {
  __typename?: 'GenreRelationResponseCollection';
  data: Array<GenreEntity>;
}

export interface Guest {
  __typename?: 'Guest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionRu?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  mixes?: Maybe<MixRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<ComponentLinksToSocialsLinksToSocials>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface GuestMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface GuestEntity {
  __typename?: 'GuestEntity';
  attributes?: Maybe<Guest>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface GuestEntityResponse {
  __typename?: 'GuestEntityResponse';
  data?: Maybe<GuestEntity>;
}

export interface GuestEntityResponseCollection {
  __typename?: 'GuestEntityResponseCollection';
  data: Array<GuestEntity>;
  meta: ResponseCollectionMeta;
}

export interface GuestFiltersInput {
  and?: InputMaybe<Array<InputMaybe<GuestFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descriptionEn?: InputMaybe<StringFilterInput>;
  descriptionRu?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mixes?: InputMaybe<MixFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GuestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GuestFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  socials?: InputMaybe<ComponentLinksToSocialsLinksToSocialsFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface GuestInput {
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  descriptionRu?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<ComponentLinksToSocialsLinksToSocialsInput>;
}

export interface GuestRelationResponseCollection {
  __typename?: 'GuestRelationResponseCollection';
  data: Array<GuestEntity>;
}

export interface I18NLocale {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface I18NLocaleEntity {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface I18NLocaleEntityResponse {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
}

export interface I18NLocaleEntityResponseCollection {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
}

export interface I18NLocaleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface IdFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
}

export interface IntFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
}

export interface JsonFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
}

export interface Mix {
  __typename?: 'Mix';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionRu?: Maybe<Scalars['String']['output']>;
  event?: Maybe<EventEntityResponse>;
  genres?: Maybe<GenreRelationResponseCollection>;
  guests?: Maybe<GuestRelationResponseCollection>;
  image: UploadFileEntityResponse;
  linksToMixes?: Maybe<ComponentLinksToMixesLink>;
  locationLink?: Maybe<Scalars['String']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
  moods?: Maybe<MoodRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  show?: Maybe<ShowEntityResponse>;
  slug?: Maybe<Scalars['String']['output']>;
  tracklist?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface MixGenresArgs {
  filters?: InputMaybe<GenreFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MixGuestsArgs {
  filters?: InputMaybe<GuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MixMoodsArgs {
  filters?: InputMaybe<MoodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MixEntity {
  __typename?: 'MixEntity';
  attributes?: Maybe<Mix>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface MixEntityResponse {
  __typename?: 'MixEntityResponse';
  data?: Maybe<MixEntity>;
}

export interface MixEntityResponseCollection {
  __typename?: 'MixEntityResponseCollection';
  data: Array<MixEntity>;
  meta: ResponseCollectionMeta;
}

export interface MixFiltersInput {
  and?: InputMaybe<Array<InputMaybe<MixFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  descriptionEn?: InputMaybe<StringFilterInput>;
  descriptionRu?: InputMaybe<StringFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  genres?: InputMaybe<GenreFiltersInput>;
  guests?: InputMaybe<GuestFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  linksToMixes?: InputMaybe<ComponentLinksToMixesLinkFiltersInput>;
  locationLink?: InputMaybe<StringFilterInput>;
  locationName?: InputMaybe<StringFilterInput>;
  moods?: InputMaybe<MoodFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MixFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MixFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  show?: InputMaybe<ShowFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  tracklist?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface MixInput {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  descriptionRu?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Scalars['ID']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  guests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  linksToMixes?: InputMaybe<ComponentLinksToMixesLinkInput>;
  locationLink?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  moods?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  show?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tracklist?: InputMaybe<Scalars['String']['input']>;
}

export interface MixRelationResponseCollection {
  __typename?: 'MixRelationResponseCollection';
  data: Array<MixEntity>;
}

export interface Mood {
  __typename?: 'Mood';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  mixes?: Maybe<MixRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface MoodMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface MoodEntity {
  __typename?: 'MoodEntity';
  attributes?: Maybe<Mood>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface MoodEntityResponse {
  __typename?: 'MoodEntityResponse';
  data?: Maybe<MoodEntity>;
}

export interface MoodEntityResponseCollection {
  __typename?: 'MoodEntityResponseCollection';
  data: Array<MoodEntity>;
  meta: ResponseCollectionMeta;
}

export interface MoodFiltersInput {
  and?: InputMaybe<Array<InputMaybe<MoodFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mixes?: InputMaybe<MixFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MoodFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MoodFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface MoodInput {
  description?: InputMaybe<Scalars['String']['input']>;
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface MoodRelationResponseCollection {
  __typename?: 'MoodRelationResponseCollection';
  data: Array<MoodEntity>;
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventSchedule?: Maybe<EventScheduleEntityResponse>;
  createGenre?: Maybe<GenreEntityResponse>;
  createGuest?: Maybe<GuestEntityResponse>;
  createMix?: Maybe<MixEntityResponse>;
  createMood?: Maybe<MoodEntityResponse>;
  createRelease?: Maybe<ReleaseEntityResponse>;
  createShopCategory?: Maybe<ShopCategoryEntityResponse>;
  createShopItem?: Maybe<ShopItemEntityResponse>;
  createShopOrder?: Maybe<ShopOrderEntityResponse>;
  createShow?: Maybe<ShowEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventSchedule?: Maybe<EventScheduleEntityResponse>;
  deleteGenre?: Maybe<GenreEntityResponse>;
  deleteGuest?: Maybe<GuestEntityResponse>;
  deleteMix?: Maybe<MixEntityResponse>;
  deleteMood?: Maybe<MoodEntityResponse>;
  deleteRelease?: Maybe<ReleaseEntityResponse>;
  deleteShopCategory?: Maybe<ShopCategoryEntityResponse>;
  deleteShopItem?: Maybe<ShopItemEntityResponse>;
  deleteShopOrder?: Maybe<ShopOrderEntityResponse>;
  deleteShow?: Maybe<ShowEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteYoutubeLink?: Maybe<YoutubeLinkEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventSchedule?: Maybe<EventScheduleEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGenre?: Maybe<GenreEntityResponse>;
  updateGuest?: Maybe<GuestEntityResponse>;
  updateMix?: Maybe<MixEntityResponse>;
  updateMood?: Maybe<MoodEntityResponse>;
  updateRelease?: Maybe<ReleaseEntityResponse>;
  updateShopCategory?: Maybe<ShopCategoryEntityResponse>;
  updateShopItem?: Maybe<ShopItemEntityResponse>;
  updateShopOrder?: Maybe<ShopOrderEntityResponse>;
  updateShow?: Maybe<ShowEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateYoutubeLink?: Maybe<YoutubeLinkEntityResponse>;
  upload: UploadFileEntityResponse;
}

export interface MutationChangePasswordArgs {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}

export interface MutationCreateEventArgs {
  data: EventInput;
}

export interface MutationCreateEventScheduleArgs {
  data: EventScheduleInput;
}

export interface MutationCreateGenreArgs {
  data: GenreInput;
}

export interface MutationCreateGuestArgs {
  data: GuestInput;
}

export interface MutationCreateMixArgs {
  data: MixInput;
}

export interface MutationCreateMoodArgs {
  data: MoodInput;
}

export interface MutationCreateReleaseArgs {
  data: ReleaseInput;
}

export interface MutationCreateShopCategoryArgs {
  data: ShopCategoryInput;
}

export interface MutationCreateShopItemArgs {
  data: ShopItemInput;
}

export interface MutationCreateShopOrderArgs {
  data: ShopOrderInput;
}

export interface MutationCreateShowArgs {
  data: ShowInput;
}

export interface MutationCreateUploadFileArgs {
  data: UploadFileInput;
}

export interface MutationCreateUploadFolderArgs {
  data: UploadFolderInput;
}

export interface MutationCreateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
}

export interface MutationCreateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
}

export interface MutationDeleteEventArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteEventScheduleArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteGenreArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteGuestArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteMixArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteMoodArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteReleaseArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteShopCategoryArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteShopItemArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteShopOrderArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteShowArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteUploadFileArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteUploadFolderArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteUsersPermissionsRoleArgs {
  id: Scalars['ID']['input'];
}

export interface MutationDeleteUsersPermissionsUserArgs {
  id: Scalars['ID']['input'];
}

export interface MutationEmailConfirmationArgs {
  confirmation: Scalars['String']['input'];
}

export interface MutationForgotPasswordArgs {
  email: Scalars['String']['input'];
}

export interface MutationLoginArgs {
  input: UsersPermissionsLoginInput;
}

export interface MutationMultipleUploadArgs {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
}

export interface MutationRegisterArgs {
  input: UsersPermissionsRegisterInput;
}

export interface MutationRemoveFileArgs {
  id: Scalars['ID']['input'];
}

export interface MutationResetPasswordArgs {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}

export interface MutationUpdateAboutArgs {
  data: AboutInput;
}

export interface MutationUpdateEventArgs {
  data: EventInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateEventScheduleArgs {
  data: EventScheduleInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateFileInfoArgs {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
}

export interface MutationUpdateGenreArgs {
  data: GenreInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateGuestArgs {
  data: GuestInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateMixArgs {
  data: MixInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateMoodArgs {
  data: MoodInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateReleaseArgs {
  data: ReleaseInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateShopCategoryArgs {
  data: ShopCategoryInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateShopItemArgs {
  data: ShopItemInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateShopOrderArgs {
  data: ShopOrderInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateShowArgs {
  data: ShowInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateUploadFileArgs {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateUploadFolderArgs {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
}

export interface MutationUpdateYoutubeLinkArgs {
  data: YoutubeLinkInput;
}

export interface MutationUploadArgs {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
}

export interface Pagination {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
}

export interface PaginationArg {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
}

export interface PopularityResponse {
  __typename?: 'PopularityResponse';
  cover?: Maybe<Cover>;
  date: Scalars['DateTime']['output'];
  fixedDate?: Maybe<CustomDate>;
  id: Scalars['ID']['output'];
  location?: Maybe<ComponentLocationLocation>;
  schedule?: Maybe<Array<Maybe<Schedule>>>;
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export interface Query {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  eventSchedule?: Maybe<EventScheduleEntityResponse>;
  eventSchedules?: Maybe<EventScheduleEntityResponseCollection>;
  eventSchedulesFixed?: Maybe<Array<Maybe<PopularityResponse>>>;
  events?: Maybe<EventEntityResponseCollection>;
  genre?: Maybe<GenreEntityResponse>;
  genreOne?: Maybe<GenreEntityResponse>;
  genres?: Maybe<GenreEntityResponseCollection>;
  genresArray?: Maybe<Array<Maybe<Array<Maybe<Genre>>>>>;
  guest?: Maybe<GuestEntityResponse>;
  guests?: Maybe<GuestEntityResponseCollection>;
  homePageRandomMix?: Maybe<MixEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  mix?: Maybe<MixEntityResponse>;
  mixes?: Maybe<MixEntityResponseCollection>;
  mood?: Maybe<MoodEntityResponse>;
  moods?: Maybe<MoodEntityResponseCollection>;
  moodsArray?: Maybe<Array<Maybe<Array<Maybe<Mood>>>>>;
  randomMix?: Maybe<MixEntityResponse>;
  randomMixes?: Maybe<MixEntityResponseCollection>;
  release?: Maybe<ReleaseEntityResponse>;
  releases?: Maybe<ReleaseEntityResponseCollection>;
  shopCategories?: Maybe<ShopCategoryEntityResponseCollection>;
  shopCategory?: Maybe<ShopCategoryEntityResponse>;
  shopItem?: Maybe<ShopItemEntityResponse>;
  shopItems?: Maybe<ShopItemEntityResponseCollection>;
  shopOrder?: Maybe<ShopOrderEntityResponse>;
  shopOrders?: Maybe<ShopOrderEntityResponseCollection>;
  show?: Maybe<ShowEntityResponse>;
  shows?: Maybe<ShowEntityResponseCollection>;
  streamIsLive?: Maybe<Scalars['Boolean']['output']>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  youtubeLink?: Maybe<YoutubeLinkEntityResponse>;
}

export interface QueryAboutArgs {
  publicationState?: InputMaybe<PublicationState>;
}

export interface QueryEventArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryEventScheduleArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryEventSchedulesArgs {
  filters?: InputMaybe<EventScheduleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryEventsArgs {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryGenreArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryGenreOneArgs {
  slug: Scalars['String']['input'];
}

export interface QueryGenresArgs {
  filters?: InputMaybe<GenreFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryGuestArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryGuestsArgs {
  filters?: InputMaybe<GuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryI18NLocaleArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryI18NLocalesArgs {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryMixArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryMoodArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
}

export interface QueryMoodsArgs {
  filters?: InputMaybe<MoodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryRandomMixesArgs {
  id: Scalars['Int']['input'];
}

export interface QueryReleaseArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryReleasesArgs {
  filters?: InputMaybe<ReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryShopCategoriesArgs {
  filters?: InputMaybe<ShopCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryShopCategoryArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryShopItemArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryShopItemsArgs {
  filters?: InputMaybe<ShopItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryShopOrderArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryShopOrdersArgs {
  filters?: InputMaybe<ShopOrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryShowArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryShowsArgs {
  filters?: InputMaybe<ShowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryUploadFileArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryUploadFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryUploadFolderArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryUploadFoldersArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryUsersPermissionsRoleArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryUsersPermissionsRolesArgs {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryUsersPermissionsUserArgs {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface QueryUsersPermissionsUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface QueryYoutubeLinkArgs {
  publicationState?: InputMaybe<PublicationState>;
}

export interface Release {
  __typename?: 'Release';
  artistName: Scalars['String']['output'];
  cover: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['Date']['output'];
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionRu?: Maybe<Scalars['String']['output']>;
  guest?: Maybe<GuestEntityResponse>;
  links?: Maybe<ComponentReleaseLinksLinks>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  releaseName?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type: Enum_Release_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface ReleaseEntity {
  __typename?: 'ReleaseEntity';
  attributes?: Maybe<Release>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface ReleaseEntityResponse {
  __typename?: 'ReleaseEntityResponse';
  data?: Maybe<ReleaseEntity>;
}

export interface ReleaseEntityResponseCollection {
  __typename?: 'ReleaseEntityResponseCollection';
  data: Array<ReleaseEntity>;
  meta: ResponseCollectionMeta;
}

export interface ReleaseFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ReleaseFiltersInput>>>;
  artistName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  descriptionEn?: InputMaybe<StringFilterInput>;
  descriptionRu?: InputMaybe<StringFilterInput>;
  guest?: InputMaybe<GuestFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<ComponentReleaseLinksLinksFiltersInput>;
  not?: InputMaybe<ReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReleaseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  releaseName?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ReleaseInput {
  artistName?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  descriptionRu?: InputMaybe<Scalars['String']['input']>;
  guest?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<ComponentReleaseLinksLinksInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseName?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Release_Type>;
}

export interface ResponseCollectionMeta {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
}

export interface Schedule {
  __typename?: 'Schedule';
  artist?: Maybe<Artist>;
  time?: Maybe<Scalars['String']['output']>;
}

export interface ShopCategory {
  __typename?: 'ShopCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<ShopCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface ShopCategoryParentArgs {
  filters?: InputMaybe<ShopCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ShopCategoryEntity {
  __typename?: 'ShopCategoryEntity';
  attributes?: Maybe<ShopCategory>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface ShopCategoryEntityResponse {
  __typename?: 'ShopCategoryEntityResponse';
  data?: Maybe<ShopCategoryEntity>;
}

export interface ShopCategoryEntityResponseCollection {
  __typename?: 'ShopCategoryEntityResponseCollection';
  data: Array<ShopCategoryEntity>;
  meta: ResponseCollectionMeta;
}

export interface ShopCategoryFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ShopCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ShopCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ShopCategoryFiltersInput>>>;
  parent?: InputMaybe<ShopCategoryFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ShopCategoryInput {
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface ShopCategoryRelationResponseCollection {
  __typename?: 'ShopCategoryRelationResponseCollection';
  data: Array<ShopCategoryEntity>;
}

export interface ShopItem {
  __typename?: 'ShopItem';
  attributes?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images: UploadFileRelationResponseCollection;
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shop_category?: Maybe<ShopCategoryEntityResponse>;
  slug?: Maybe<Scalars['String']['output']>;
  soldout?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface ShopItemImagesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ShopItemEntity {
  __typename?: 'ShopItemEntity';
  attributes?: Maybe<ShopItem>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface ShopItemEntityResponse {
  __typename?: 'ShopItemEntityResponse';
  data?: Maybe<ShopItemEntity>;
}

export interface ShopItemEntityResponseCollection {
  __typename?: 'ShopItemEntityResponseCollection';
  data: Array<ShopItemEntity>;
  meta: ResponseCollectionMeta;
}

export interface ShopItemFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ShopItemFiltersInput>>>;
  attributes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ShopItemFiltersInput>;
  oldPrice?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ShopItemFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  shop_category?: InputMaybe<ShopCategoryFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  soldout?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ShopItemInput {
  attributes?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shop_category?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  soldout?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface ShopOrder {
  __typename?: 'ShopOrder';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  items?: Maybe<Array<Maybe<ComponentOrderItemsOrderItems>>>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  postcode: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Enum_Shoporder_Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface ShopOrderItemsArgs {
  filters?: InputMaybe<ComponentOrderItemsOrderItemsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ShopOrderEntity {
  __typename?: 'ShopOrderEntity';
  attributes?: Maybe<ShopOrder>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface ShopOrderEntityResponse {
  __typename?: 'ShopOrderEntityResponse';
  data?: Maybe<ShopOrderEntity>;
}

export interface ShopOrderEntityResponseCollection {
  __typename?: 'ShopOrderEntityResponseCollection';
  data: Array<ShopOrderEntity>;
  meta: ResponseCollectionMeta;
}

export interface ShopOrderFiltersInput {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ShopOrderFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentOrderItemsOrderItemsFiltersInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ShopOrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ShopOrderFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  postcode?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ShopOrderInput {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentOrderItemsOrderItemsInput>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Enum_Shoporder_Status>;
}

export interface Show {
  __typename?: 'Show';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionRu?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  mixes?: Maybe<MixRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<ComponentLinksToSocialsLinksToSocials>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  youtubePlayerLink?: Maybe<Scalars['String']['output']>;
}

export interface ShowMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface ShowEntity {
  __typename?: 'ShowEntity';
  attributes?: Maybe<Show>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface ShowEntityResponse {
  __typename?: 'ShowEntityResponse';
  data?: Maybe<ShowEntity>;
}

export interface ShowEntityResponseCollection {
  __typename?: 'ShowEntityResponseCollection';
  data: Array<ShowEntity>;
  meta: ResponseCollectionMeta;
}

export interface ShowFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ShowFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  descriptionEn?: InputMaybe<StringFilterInput>;
  descriptionRu?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mixes?: InputMaybe<MixFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ShowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ShowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  socials?: InputMaybe<ComponentLinksToSocialsLinksToSocialsFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  youtubePlayerLink?: InputMaybe<StringFilterInput>;
}

export interface ShowInput {
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  descriptionRu?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<ComponentLinksToSocialsLinksToSocialsInput>;
  youtubePlayerLink?: InputMaybe<Scalars['String']['input']>;
}

export interface StringFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface TimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
}

export interface UploadFile {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
}

export interface UploadFileEntity {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface UploadFileEntityResponse {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
}

export interface UploadFileEntityResponseCollection {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFileFiltersInput {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
}

export interface UploadFileInput {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
}

export interface UploadFileRelationResponseCollection {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
}

export interface UploadFolder {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface UploadFolderChildrenArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UploadFolderFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UploadFolderEntity {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface UploadFolderEntityResponse {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
}

export interface UploadFolderEntityResponseCollection {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFolderFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UploadFolderInput {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
}

export interface UploadFolderRelationResponseCollection {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
}

export interface UsersPermissionsCreateRolePayload {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
}

export interface UsersPermissionsDeleteRolePayload {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
}

export interface UsersPermissionsLoginPayload {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
}

export interface UsersPermissionsMe {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
}

export interface UsersPermissionsMeRole {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
}

export interface UsersPermissionsPasswordPayload {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
}

export interface UsersPermissionsPermission {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface UsersPermissionsPermissionEntity {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface UsersPermissionsPermissionFiltersInput {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
}

export interface UsersPermissionsRegisterInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}

export interface UsersPermissionsRole {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
}

export interface UsersPermissionsRolePermissionsArgs {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UsersPermissionsRoleUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface UsersPermissionsRoleEntity {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface UsersPermissionsRoleEntityResponse {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
}

export interface UsersPermissionsRoleEntityResponseCollection {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsRoleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
}

export interface UsersPermissionsRoleInput {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
}

export interface UsersPermissionsUpdateRolePayload {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
}

export interface UsersPermissionsUser {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
}

export interface UsersPermissionsUserEntity {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface UsersPermissionsUserEntityResponse {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
}

export interface UsersPermissionsUserEntityResponseCollection {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUserFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
}

export interface UsersPermissionsUserInput {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}

export interface UsersPermissionsUserRelationResponseCollection {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
}

export interface YoutubeLink {
  __typename?: 'YoutubeLink';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  link?: Maybe<Array<Maybe<ComponentLinkComponentLinkComponent>>>;
  mixes?: Maybe<MixRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
}

export interface YoutubeLinkLinkArgs {
  filters?: InputMaybe<ComponentLinkComponentLinkComponentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface YoutubeLinkMixesArgs {
  filters?: InputMaybe<MixFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export interface YoutubeLinkEntity {
  __typename?: 'YoutubeLinkEntity';
  attributes?: Maybe<YoutubeLink>;
  id?: Maybe<Scalars['ID']['output']>;
}

export interface YoutubeLinkEntityResponse {
  __typename?: 'YoutubeLinkEntityResponse';
  data?: Maybe<YoutubeLinkEntity>;
}

export interface YoutubeLinkInput {
  link?: InputMaybe<
    Array<InputMaybe<ComponentLinkComponentLinkComponentInput>>
  >;
  mixes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
}
