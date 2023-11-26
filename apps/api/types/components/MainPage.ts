import type { Seo } from './Seo';

export interface MainPage {
  id: number;
  title?: string;
  slug?: string;
  SEO?: Seo;
}
