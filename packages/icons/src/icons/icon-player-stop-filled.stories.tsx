import { Meta, StoryObj } from '@storybook/react';
import { IconPlayerStopFilled } from './icon-player-stop-filled';

const meta = {
  title: 'Icons/IconPlayerStopFilled',
  component: IconPlayerStopFilled,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconPlayerStopFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
