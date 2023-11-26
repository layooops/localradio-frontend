import type { Meta, StoryObj } from '@storybook/react';

import { ButtonProps } from '../lib/types';
import { OldButton } from './old-button';

const defaultArgs: ButtonProps = {
  children: 'daddad',
  shadowVariant: 'clear',
  colorVariant: 'secondary',
  sizeVariant: 'medium',
  mod: 'rounded',
};

const meta: Meta<typeof OldButton> = {
  title: 'ui/OldButton',
  component: OldButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OldButton>;

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};
