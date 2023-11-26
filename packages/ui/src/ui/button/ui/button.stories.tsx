import { IconArrowDown, IconArrowLeft } from '@local-radio/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonProps } from '../lib/types';
import { Button } from './button';

const icons = { IconArrowDown, IconArrowLeft };

const defaultArgs: ButtonProps = {
  children: 'Button',
  appearance: 'secondary',
  size: 'medium',
  shape: 'rounded',
};

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    overflowingIcon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};
