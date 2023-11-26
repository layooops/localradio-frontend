import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionItem } from './description-item';
import { DescriptionItemProps } from './description-item.interface';

const defaultArgs: DescriptionItemProps = {
  html: 'dadad',
  sizeVariant: 'medium',
};

const meta: Meta<typeof DescriptionItem> = {
  title: 'ui/Description/Description-Item',
  component: DescriptionItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DescriptionItem>;

export const DescriptionItemStandard: Story = {
  args: {
    ...defaultArgs,
  },
};
export const DescriptionItemLarge: Story = {
  args: {
    ...defaultArgs,
    sizeVariant: 'large',
  },
};
