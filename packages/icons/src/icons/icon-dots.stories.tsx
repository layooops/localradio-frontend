import { Meta, StoryObj } from '@storybook/react';
import { IconDots } from './icon-dots';

const meta = {
  title: 'Icons/IconDots',
  component: IconDots,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
