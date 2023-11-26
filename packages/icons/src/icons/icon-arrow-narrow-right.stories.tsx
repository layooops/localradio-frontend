import { Meta, StoryObj } from '@storybook/react';
import { IconArrowNarrowRight } from './icon-arrow-narrow-right';

const meta = {
  title: 'Icons/IconArrowNarrowRight',
  component: IconArrowNarrowRight,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconArrowNarrowRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
