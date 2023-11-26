import { Meta, StoryObj } from '@storybook/react';
import { IconShoppingBag } from './icon-shopping-bag';

const meta = {
  title: 'Icons/IconShoppingBag',
  component: IconShoppingBag,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconShoppingBag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
