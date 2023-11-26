import type { HTMLAttributes } from 'react';
import type { Maybe } from 'yup';
import type {
  Mix,
  MixEntity,
} from '@/shared/api/graphql/__generated__/schema.graphql';

export interface PlayerElementProps {
  mix?: Maybe<MixEntity>;
  mixLink?: Maybe<string>;
  page: 'mix' | 'home';
}

export interface PlayerButtonProps
  extends Pick<PlayerElementProps, 'mixLink'>,
    HTMLAttributes<HTMLButtonElement> {
  attributes: Maybe<Mix>;
  mixId?: Maybe<string>;
}
