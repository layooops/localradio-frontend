import { Meta, StoryObj } from '@storybook/react';
import { IconArrowLeft } from './icon-arrow-left';

const meta = {
  title: 'Icons/IconArrowLeft',
  component: IconArrowLeft,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Description',
    docs: {
      iconMetadata: {
        description: 'Description',
        keywords: ['direction', 'navigation', 'arrow', 'navigate', 'guidance', 'left'],
        authors: [],
        package: 'tabler-icons',
      },
    },
  },
} satisfies Meta<typeof IconArrowLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
