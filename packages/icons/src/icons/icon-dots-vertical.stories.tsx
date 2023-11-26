import { Meta, StoryObj } from '@storybook/react';
import { IconDotsVertical } from './icon-dots-vertical';

const meta = {
  title: 'Icons/IconDotsVertical',
  component: IconDotsVertical,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconDotsVertical>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
