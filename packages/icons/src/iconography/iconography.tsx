import { IconGallery } from '../../.storybook/components/icon-gallery/icon-gallery';
import * as Icons from '../index';

interface IconographyProps {}

export const Iconography = (props: IconographyProps) => {
  return <IconGallery icons={Icons as any} />;
};
