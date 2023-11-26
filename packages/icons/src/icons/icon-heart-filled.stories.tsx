import { Meta, StoryObj } from '@storybook/react';
import { IconHeartFilled } from './icon-heart-filled';

const meta = {
  title: 'Icons/IconHeartFilled',
  component: IconHeartFilled,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconHeartFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
