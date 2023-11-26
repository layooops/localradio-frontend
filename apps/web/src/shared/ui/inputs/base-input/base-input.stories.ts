import type { Meta, StoryObj } from '@storybook/react';
import type { BaseInputProps } from '../types/input.interface';
import { BaseInput } from './base-input';

const defaultArgs: BaseInputProps = {
  placeholder: 'Email',
  value: '',
  error: null,
};

const meta: Meta<typeof BaseInput> = {
  title: 'ui/inputs/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    value: 'radiolocal@.com',
    error: 'Email is not valid',
  },
};
