import type { InputProps } from '../types/input.interface';
import type { FocusEvent } from 'react';

import { useCallback, useState } from 'react';
import { useIMask } from 'react-imask';
import { useUncontrolled } from '@mantine/hooks';

import { createView } from '@/shared/lib/effector/view';

import { InputErrorWrapper } from '../input-error-wrapper';

const TextInput = createView<InputProps>()
  .displayName('TextInput')
  .map((props) => {
    const {
      inputRef,
      value: passedValue,
      onFocus,
      onBlur,
      defaultValue,
      onChange,
      mask,
      ...rest
    } = props;

    const [focused, setFocused] = useState(false);

    const [value, handleChange] = useUncontrolled({
      value: passedValue,
      defaultValue,
      finalValue: '',
      onChange,
    });

    const { ref: imaskRef } = useIMask<HTMLInputElement, any>(
      { mask },
      {
        onAccept: (value, masked) => {
          mask && handleChange(masked.value);
        },
      },
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (typeof onFocus === 'function') {
          onFocus(e);
        }
        setFocused(true);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (typeof onBlur === 'function') {
          onBlur(e);
        }
        setFocused(false);
      },
      [onBlur],
    );

    return {
      inputRef,
      imaskRef,
      value,
      handleChange,
      handleFocus,
      handleBlur,
      ...rest,
    };
  })
  .memo()
  .view(
    ({
      inputRef,
      imaskRef,
      error,
      value,
      mask,
      handleChange,
      handleFocus,
      handleBlur,
      ...rest
    }) => {
      return (
        <InputErrorWrapper
          {...rest}
          className='px-2 lg:px-2.5'
          ref={mask ? imaskRef : inputRef}
          value={value}
          onChange={(event) =>
            mask
              ? event.preventDefault()
              : handleChange(event.currentTarget.value)
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={error}
        />
      );
    },
  ).Memo;

export { TextInput };
