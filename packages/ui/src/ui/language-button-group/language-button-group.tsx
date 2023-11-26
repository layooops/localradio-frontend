import { Locales } from '@/lib/types';
import clsx from 'clsx';
import { LanguageButton } from '../language-button/language-button';
import { LanguageButtonGroupProps } from './language-button-group.interface';

export const LanguageButtonGroup = (props: LanguageButtonGroupProps) => {
  const { sizeVariant, langDisabled, activeLang, setActiveLang } = props;

  const handleChangeLang = (lang: Locales) => {
    setActiveLang(lang);
  };

  return (
    <div
      className={clsx(
        'h-fit gap-1  border-black xl:gap-1.5',
        { 'flex flex-row': sizeVariant === 'large' },
        { 'flex flex-row lg:flex-col  lg:pb-0': sizeVariant !== 'large' },
      )}
    >
      <LanguageButton
        title='Change Language to Russian'
        onClick={() => handleChangeLang('ru')}
        text='Ru'
        sizeVariant={sizeVariant}
        active={activeLang === 'ru'}
        disabled={langDisabled.ru}
      />
      <LanguageButton
        title='Change Language to English'
        onClick={() => handleChangeLang('en')}
        text='En'
        active={activeLang === 'en'}
        sizeVariant={sizeVariant}
        disabled={langDisabled.en}
      />
    </div>
  );
};
