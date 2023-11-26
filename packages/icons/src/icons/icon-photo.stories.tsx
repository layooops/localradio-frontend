import { Meta, StoryObj } from '@storybook/react';
import { IconPhoto } from './icon-photo';

const meta = {
  title: 'Icons/IconPhoto',
  component: IconPhoto,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconPhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
