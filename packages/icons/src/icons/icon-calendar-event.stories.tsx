import { Meta, StoryObj } from '@storybook/react';
import { IconCalendarEvent } from './icon-calendar-event';

const meta = {
  title: 'Icons/IconCalendarEvent',
  component: IconCalendarEvent,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Icon Description',
    docs: {
      iconMetadata: {},
    },
  },
} satisfies Meta<typeof IconCalendarEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000',
  },
};
