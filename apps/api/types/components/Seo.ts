import type { Meta } from './Meta';

export interface Seo {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  Meta: Meta[];
}
