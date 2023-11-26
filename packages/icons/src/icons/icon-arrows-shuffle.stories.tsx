import { Meta, StoryObj } from '@storybook/react';
import { IconArrowsShuffle } from './icon-arrows-shuffle';

const meta = {
  title: 'Icons/IconArrowsShuffle',
  component: IconArrowsShuffle,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconArrowsShuffle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
