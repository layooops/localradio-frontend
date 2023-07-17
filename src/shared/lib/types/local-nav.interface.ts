export type SocialLinks =
  | 'soundcloud'
  | 'bandcamp'
  | 'telegram'
  | 'instagram'
  | 'vk';

export interface LocalNavElement {
  href?: string;
  text: string;
  ariaLabel?: string;
  externalText?: string;
  type?: SocialLinks;
}
