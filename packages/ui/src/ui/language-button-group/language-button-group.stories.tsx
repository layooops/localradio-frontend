import { Locales } from '@/lib/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LanguageButtonGroup } from './language-button-group';
import { LanguageButtonGroupProps } from './language-button-group.interface';

const defaultArgs: LanguageButtonGroupProps = {
  langDisabled: {
    ru: false,
    en: false,
  },
  sizeVariant: 'large',
  activeLang: 'en',
  setActiveLang: () => {},
};

const meta: Meta<typeof LanguageButtonGroup> = {
  title: 'ui/LanguageButton/Group',
  component: LanguageButtonGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LanguageButtonGroup>;

export const Default = () => {
  const [activeLang, setActiveLang] = useState<Locales>('ru');

  return (
    <LanguageButtonGroup {...defaultArgs} activeLang={activeLang} setActiveLang={setActiveLang} />
  );
};

export const DisabledOne: Story = {
  args: {
    ...defaultArgs,
    langDisabled: {
      ru: false,
      en: true,
    },
  },
};

export const DisabledAll: Story = {
  args: {
    ...defaultArgs,
    langDisabled: {
      ru: true,
      en: true,
    },
  },
};
