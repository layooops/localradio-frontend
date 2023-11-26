import { Meta, StoryObj } from '@storybook/react';
import { IconPlayerPlayFilled } from './icon-player-play-filled';

const meta = {
  title: 'Icons/IconPlayerPlayFilled',
  component: IconPlayerPlayFilled,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconPlayerPlayFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
