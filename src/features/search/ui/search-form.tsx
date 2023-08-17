import type { ChangeEvent, FormEventHandler } from 'react';

import { memo, useEffect, useState } from 'react';
import { useUnit } from 'effector-react';

import { DEBOUNCE_TIMEOUT_IN_MS } from '@/shared/lib/constants/contants';
import { useDebounce } from '@/shared/lib/hooks/use-debouce.hook';
import { Icon } from '@/shared/ui/icons';
import { BaseInput } from '@/shared/ui/inputs/base-input';

import {
  openSearchModalEv,
  searchChanged,
  submittedSearchEv,
} from '../model/search.model';

const MIN_SEARCH_LENGTH = 1;

export const SearchForm = () => {
  const { openSearchModal, searchChange, submitted } = useUnit({
    openSearchModal: openSearchModalEv,
    searchChange: searchChanged,
    submitted: submittedSearchEv,
  });
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSubmitForm: FormEventHandler = (e) => {
    e.preventDefault();
    submitted();
  };

  const debounceSearch = useDebounce(
    searchTerm.toString().trim(),
    DEBOUNCE_TIMEOUT_IN_MS,
  );

  useEffect(() => {
    if (debounceSearch.toString().length > MIN_SEARCH_LENGTH) {
      searchChange(debounceSearch);
    }
  }, [searchChange, debounceSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form
      className='relative flex flex-1 items-center gap-1.5 rounded-lg'
      onSubmit={onSubmitForm}
      method='get'
    >
      <BaseInput
        onChange={handleChange}
        id='search'
        placeholder='Search'
        value={searchTerm}
        type='text'
        autoComplete='off'
        aria-label='Search'
        className='px-8 lg:px-10'
      />
      <div className='absolute left-0 flex h-full w-8 items-center justify-center stroke-black lg:w-10'>
        <Icon.SearchIconX className='h-[1.15rem] w-[1.15rem] 2xl:h-[1.35rem] 2xl:w-[1.35rem] ' />
      </div>
      <button
        type='reset'
        onClick={() => openSearchModal(false)}
        className='absolute right-0 flex h-full w-8 items-center justify-center rounded-lg hover:fill-secondary-dark lg:w-10'
      >
        <div className=' flex h-3 w-3 items-center 2xl:h-3.5 2xl:w-3.5'>
          <Icon.CloseIcon weight='bold' />
        </div>
      </button>
    </form>
  );
};

export const SearchFormWithMemo = memo(SearchForm);
