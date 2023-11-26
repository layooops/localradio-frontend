import { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from './icon-plus';

const meta = {
  title: 'Icons/IconPlus',
  component: IconPlus,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconPlus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
