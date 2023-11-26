import type { Schema, Attribute } from '@strapi/strapi';

export interface DateEventDate extends Schema.Component {
  collectionName: 'components_date_event_dates';
  info: {
    displayName: 'eventDate';
    description: '';
  };
  attributes: {
    eventDate: Attribute.Date;
    eventTimeStart: Attribute.Time;
    eventTimeEnd: Attribute.Time;
  };
}

export interface EventOrTypeEventInfo extends Schema.Component {
  collectionName: 'components_event_or_type_event_infos';
  info: {
    displayName: 'EventInfo';
  };
  attributes: {
    name: Attribute.String;
    info: Attribute.RichText;
  };
}

export interface EventOrTypeEvent extends Schema.Component {
  collectionName: 'components_event_or_type_events';
  info: {
    displayName: 'Event';
    description: '';
  };
  attributes: {
    eventDate: Attribute.Component<'date.event-date'>;
    schedule: Attribute.Component<'event-or-type.event-info', true>;
    location: Attribute.Component<'location.location'>;
    info: Attribute.RichText;
  };
}

export interface EventOrTypeNews extends Schema.Component {
  collectionName: 'components_event_or_type_news';
  info: {
    displayName: 'news';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface EventEvent extends Schema.Component {
  collectionName: 'components_event_events';
  info: {
    displayName: 'Event';
    description: '';
  };
  attributes: {
    date: Attribute.Component<'date.event-date'>;
    schedule: Attribute.Component<'event.schedule', true>;
    location: Attribute.Component<'location.location'>;
    info: Attribute.RichText;
  };
}

export interface EventSchedule extends Schema.Component {
  collectionName: 'components_event_schedules';
  info: {
    displayName: 'schedule';
  };
  attributes: {
    name: Attribute.String;
    info: Attribute.RichText;
  };
}

export interface LinkComponentLinkComponent extends Schema.Component {
  collectionName: 'components_link_component_link_components';
  info: {
    displayName: 'link component';
  };
  attributes: {
    link: Attribute.String;
  };
}

export interface LinksToMixesLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'linksToMixes';
    description: '';
  };
  attributes: {
    soundcloudLink: Attribute.String;
    youtubeLink: Attribute.String;
  };
}

export interface LinksToSocialsLinksToSocials extends Schema.Component {
  collectionName: 'components_links_to_socials_links_to_socials';
  info: {
    displayName: 'Links to Socials';
    description: '';
  };
  attributes: {
    VKLink: Attribute.String;
    TGLink: Attribute.String;
    IGLink: Attribute.String;
    SCLink: Attribute.String;
    BCLink: Attribute.String;
  };
}

export interface LocationLocation extends Schema.Component {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    locationName: Attribute.String & Attribute.DefaultTo<'\u0421\u0442\u0443\u0434\u0438\u044F'>;
    locationLink: Attribute.String & Attribute.DefaultTo<'https://vk.com/radiolocal'>;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
  };
}

export interface OrderItemsOrderItems extends Schema.Component {
  collectionName: 'components_order_items_order_items';
  info: {
    displayName: 'Order Items';
  };
  attributes: {
    product: Attribute.Relation<'order-items.order-items', 'oneToOne', 'api::shop-item.shop-item'>;
    quantity: Attribute.Integer & Attribute.Required;
  };
}

export interface PageMainPage extends Schema.Component {
  collectionName: 'components_page_main_pages';
  info: {
    displayName: 'MainPageSeo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    SEO: Attribute.Component<'seo.seo'>;
  };
}

export interface PagePage extends Schema.Component {
  collectionName: 'components_page_pages';
  info: {
    displayName: 'Page';
    description: '';
  };
  attributes: {};
}

export interface ReleaseLinksLinks extends Schema.Component {
  collectionName: 'components_release_links_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    soundcloud: Attribute.String;
    youtubeMusic: Attribute.String;
    yandexMusic: Attribute.String;
    appleMusic: Attribute.String;
    spotify: Attribute.String;
    bandcamp: Attribute.String;
    vkMusic: Attribute.String;
  };
}

export interface ScheduleArtist extends Schema.Component {
  collectionName: 'components_schedule_artists';
  info: {
    displayName: 'artist';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    guest: Attribute.Relation<'schedule.artist', 'oneToOne', 'api::guest.guest'>;
    show: Attribute.Relation<'schedule.artist', 'oneToOne', 'api::show.show'>;
    description: Attribute.String;
  };
}

export interface ScheduleSchedule extends Schema.Component {
  collectionName: 'components_schedule_schedules';
  info: {
    displayName: 'schedule';
    description: '';
  };
  attributes: {
    time: Attribute.Time;
    artist: Attribute.Component<'schedule.artist'>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    Meta: Attribute.Component<'meta.meta', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'date.event-date': DateEventDate;
      'event-or-type.event-info': EventOrTypeEventInfo;
      'event-or-type.event': EventOrTypeEvent;
      'event-or-type.news': EventOrTypeNews;
      'event.event': EventEvent;
      'event.schedule': EventSchedule;
      'link-component.link-component': LinkComponentLinkComponent;
      'links-to-mixes.link': LinksToMixesLink;
      'links-to-socials.links-to-socials': LinksToSocialsLinksToSocials;
      'location.location': LocationLocation;
      'meta.meta': MetaMeta;
      'order-items.order-items': OrderItemsOrderItems;
      'page.main-page': PageMainPage;
      'page.page': PagePage;
      'release-links.links': ReleaseLinksLinks;
      'schedule.artist': ScheduleArtist;
      'schedule.schedule': ScheduleSchedule;
      'seo.seo': SeoSeo;
    }
  }
}
