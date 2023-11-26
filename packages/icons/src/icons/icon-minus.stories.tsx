import { Meta, StoryObj } from '@storybook/react';
import { IconMinus } from './icon-minus';

const meta = {
  title: 'Icons/IconMinus',
  component: IconMinus,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconMinus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
