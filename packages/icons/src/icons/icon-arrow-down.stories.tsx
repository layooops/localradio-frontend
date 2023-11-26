import { Meta, StoryObj } from '@storybook/react';
import { IconArrowDown } from './icon-arrow-down';

const meta = {
  title: 'Icons/IconArrowDown',
  component: IconArrowDown,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Description',
    docs: {
      iconMetadata: {
        description: 'Description',
        keywords: ['direction', 'navigation', 'arrow', 'navigate', 'guidance', 'down'],
        authors: [],
        package: 'tabler-icons',
      },
    },
  },
} satisfies Meta<typeof IconArrowDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
