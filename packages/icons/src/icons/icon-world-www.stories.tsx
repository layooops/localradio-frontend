import { Meta, StoryObj } from '@storybook/react';
import { IconWorldWww } from './icon-world-www';

const meta = {
  title: 'Icons/IconWorldWww',
  component: IconWorldWww,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconWorldWww>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
