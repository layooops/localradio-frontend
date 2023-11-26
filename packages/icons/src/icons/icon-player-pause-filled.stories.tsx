import { Meta, StoryObj } from '@storybook/react';
import { IconPlayerPauseFilled } from './icon-player-pause-filled';

const meta = {
  title: 'Icons/IconPlayerPauseFilled',
  component: IconPlayerPauseFilled,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconPlayerPauseFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
