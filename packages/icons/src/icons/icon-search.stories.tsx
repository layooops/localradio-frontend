import { Meta, StoryObj } from '@storybook/react';
import { IconSearch } from './icon-search';

const meta = {
  title: 'Icons/IconSearch',
  component: IconSearch,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
