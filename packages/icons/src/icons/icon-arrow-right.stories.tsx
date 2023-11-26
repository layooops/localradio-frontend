import { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight } from './icon-arrow-right';

const meta = {
  title: 'Icons/IconArrowRight',
  component: IconArrowRight,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconArrowRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
