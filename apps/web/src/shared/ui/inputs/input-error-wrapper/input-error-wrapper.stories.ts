import type { Meta, StoryObj } from '@storybook/react';
import type { BaseInput } from '../base-input';
import type { BaseInputProps } from '../types/input.interface';
import { InputErrorWrapper } from './input-error-wrapper';

const defaultArgs: BaseInputProps = {
  placeholder: 'Email',
  value: '',
  error: null,
};

const meta: Meta<typeof InputErrorWrapper> = {
  title: 'ui/inputs/InputErrorWrapper',
  component: InputErrorWrapper,
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
    value: 'radiolocal@.com',
    error: 'Email is not valid',
  },
};
