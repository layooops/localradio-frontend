import { Meta, StoryObj } from '@storybook/react';
import { IconExternalLink } from './icon-external-link';

const meta = {
  title: 'Icons/IconExternalLink',
  component: IconExternalLink,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
