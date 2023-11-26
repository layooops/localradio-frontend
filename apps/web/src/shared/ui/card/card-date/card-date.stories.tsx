import type { Meta, StoryObj } from '@storybook/react';
import { CardDateWithMemo } from './card-date';
import type { CardDateProps } from './card-date.interface';

const defaultArgs: CardDateProps = {
  date: new Date().toISOString(),
  sizeVariant: 'large',
  text: 'latest mix',
  link: 'https://radiolocal.online',
  variant: 'show',
};

const meta = {
  title: 'ui/CardDate',
  component: CardDateWithMemo,
  tags: ['autodocs'],
} satisfies Meta<typeof CardDateWithMemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...defaultArgs,
    variant: 'mix',
    text: 'Студия',
  },
};
export const Secondary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const SmallDate: Story = {
  args: {
    date: defaultArgs.date,
    sizeVariant: 'small',
    variant: 'mix',
  },
  parameters: {
    description: {
      story: 'Another description on the story, overriding the comments',
    },
  },
};
