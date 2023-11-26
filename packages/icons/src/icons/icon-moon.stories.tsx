import { Meta, StoryObj } from '@storybook/react';
import { IconMoon } from './icon-moon';

const meta = {
  title: 'Icons/IconMoon',
  component: IconMoon,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconMoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
