import { Meta, StoryObj } from '@storybook/react';
import { IconLoader } from './icon-loader';

const meta = {
  title: 'Icons/IconLoader',
  component: IconLoader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
