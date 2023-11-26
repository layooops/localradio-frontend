import type { Meta, StoryObj } from '@storybook/react';
import { LanguageButton } from './language-button';
import { LanguageButtonProps } from './language-button.interface';

const defaultArgs: LanguageButtonProps = {
  active: true,
  text: 'ru',
  sizeVariant: 'large',
  disabled: false,
};

const meta: Meta<typeof LanguageButton> = {
  title: 'ui/LanguageButton/Single',
  component: LanguageButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LanguageButton>;

export const ActiveButton: Story = {
  args: {
    ...defaultArgs,
    text: 'ru',
    active: true,
  },
};

export const InactiveButton: Story = {
  args: {
    ...defaultArgs,
    text: 'ru',
    active: false,
  },
};

export const DisabledButton: Story = {
  args: {
    ...defaultArgs,
    active: true,
    disabled: true,
  },
};
