import { Meta, StoryObj } from '@storybook/react';
import { IconBrightnessUp } from './icon-brightness-up';

const meta = {
  title: 'Icons/IconBrightnessUp',
  component: IconBrightnessUp,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconBrightnessUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
