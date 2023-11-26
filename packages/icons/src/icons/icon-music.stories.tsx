import { Meta, StoryObj } from '@storybook/react';
import { IconMusic } from './icon-music';

const meta = {
  title: 'Icons/IconMusic',
  component: IconMusic,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconMusic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
