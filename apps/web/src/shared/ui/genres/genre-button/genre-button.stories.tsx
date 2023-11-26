import type { Meta, StoryObj } from '@storybook/react';
import { GenreItem } from './genre-item';

const meta = {
  title: 'Ui/Genre/GenreButton',
  component: GenreItem,
  tags: ['autodocs'],
} satisfies Meta<typeof GenreItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenreButtonPrimary: Story = {
  args: {
    title: 'Rock  ',
    sizeVariant: 'standard',
    type: 'genre',
    variant: 'solid',
    slug: 'rock',
    colorVariant: 'primary',
  },
};
