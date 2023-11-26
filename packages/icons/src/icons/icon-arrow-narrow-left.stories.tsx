import { Meta, StoryObj } from '@storybook/react';
import { IconArrowNarrowLeft } from './icon-arrow-narrow-left';

const meta = {
  title: 'Icons/IconArrowNarrowLeft',
  component: IconArrowNarrowLeft,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconArrowNarrowLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
