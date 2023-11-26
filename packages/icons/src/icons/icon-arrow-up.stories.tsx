import { Meta, StoryObj } from '@storybook/react';
import { IconArrowUp } from './icon-arrow-up';

const meta = {
  title: 'Icons/IconArrowUp',
  component: IconArrowUp,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconArrowUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
