import type { Meta, StoryObj } from '@storybook/react';
import type { GenreRelationResponseCollection } from '@/shared/api/graphql/__generated__/schema.graphql';
import { GenreListWithMemo } from './genre-list';

const meta = {
  title: 'Ui/Genre/GenreList',
  component: GenreListWithMemo,
  tags: ['autodocs'],
} satisfies Meta<typeof GenreListWithMemo>;

const genres: GenreRelationResponseCollection = {
  __typename: 'GenreRelationResponseCollection',
  data: [
    {
      __typename: 'GenreEntity',
      id: '20',
      attributes: {
        __typename: 'Genre',
        name: 'Hip-Hop',
        slug: 'hip-hop',
      },
    },
    {
      __typename: 'GenreEntity',
      id: '4',
      attributes: {
        __typename: 'Genre',
        name: 'Acid',
        slug: 'acid',
      },
    },
    {
      __typename: 'GenreEntity',
      id: '2',
      attributes: {
        __typename: 'Genre',
        name: 'Electro',
        slug: 'electro',
      },
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListSmall: Story = {
  args: {
    genres: genres.data,
    sizeVariant: 'small',
    variant: 'solid',
    colorVariant: 'primary',
  },
};
