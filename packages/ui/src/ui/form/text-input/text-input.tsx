import clsx from 'clsx';
import {
  InputHTMLAttributes,
  createElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { Icon } from '../../icon';
import { Label } from '../label/label';
import { ValidationText } from '../validation-text/validation-text';
import classes from './text-input.module.css';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  size?: 'medium' | 'large';
  validation?: { status: 'invalid' | 'valid' | 'warning'; text: string };
  mode?: 'default' | 'clear';
  multiline?: boolean | number;
  focused?: boolean;
  selectTextOnFocus?: boolean;
  suggestion?: string;
  onChange?(value: string, id: string): void;
  label?: string;
  description?: string;
  leftIcon?: React.ComponentType;
  rightIcon?: React.ComponentType;
}

export const TextInput = (props: TextInputProps) => {
  const {
    label,
    size = 'medium',
    id: idProp,
    validation,
    multiline = false,
    focused,
    value = '',
    suggestion,
    selectTextOnFocus,
    onChange,
    onFocus,
    onBlur,
    readOnly,
    children,
    description,
    disabled,
    mode = 'default',
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  const validationStatus = validation?.status;

  const [focus, setFocus] = useState(Boolean(focused));
  const normalizedValue = suggestion ? suggestion : value;
  const uniqId = useId();
  const id = idProp ?? uniqId;

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const getInputRef = useCallback(() => {
    return multiline ? textAreaRef.current : inputRef.current;
  }, [multiline]);

  useEffect(() => {
    const input = getInputRef();
    if (!input || focused === undefined) return;
    focused ? input.focus() : input.blur();
  }, [focused, getInputRef]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(event.currentTarget.value, id);
  }

  function handleOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  }

  const handleOnFocus = (
    event: React.FocusEvent<HTMLElement> | React.MouseEvent<HTMLInputElement>,
  ) => {
    setFocus(true);

    if (selectTextOnFocus && !suggestion) {
      const input = getInputRef();
      input?.select();
    }

    if (onFocus) {
      onFocus(event as React.FocusEvent<HTMLInputElement>);
    }
  };

  function handleClickChild() {
    if (focus) {
      return;
    }
    setFocus(true);
    getInputRef()?.focus();
  }

  const inputClassName = clsx(
    classes[`text-input`],
    classes[`text-input-mode-${mode}`],
    classes[`text-input-size-${size}`],
    {
      [classes[`text-input-validation-${validationStatus ?? 'valid'}`]]:
        (!readOnly || disabled) && validationStatus,
      [classes[`text-input-filled`]]: normalizedValue,
      [classes[`text-input-disabled`]]: disabled,
      [classes[`text-input-read-only`]]: readOnly,
    },
  );

  const inputInnerClassName = clsx(classes[`input-inner`], classes[`input-inner-size-${size}`]);

  const input = createElement(multiline ? 'textarea' : 'input', {
    id: id,
    ref: multiline ? textAreaRef : inputRef,
    value: normalizedValue,
    className: inputInnerClassName,
    disabled,
    readOnly,
    rows: getRows(multiline),
    onChange: handleChange,
    onFocus: handleOnFocus,
    onClick: handleClickChild,
    onBlur: handleOnBlur,
    ...rest,
  });

  const leftIconMarkup = leftIcon ? <Icon icon={leftIcon} size={size} /> : null;
  const iconMarkup = input;

  const rightIconMarkup = rightIcon ? <Icon icon={rightIcon} size={size} /> : null;

  return (
    <div className={classes['text-field']}>
      <Label label={label} disabled={disabled} onClick={handleClickChild} size={size} />
      {description && <div className={classes['description']}>{description}</div>}
      <div className={inputClassName}>
        {leftIconMarkup}
        {iconMarkup}
        {rightIconMarkup}
      </div>
      {validation?.text && (
        <ValidationText
          className={classes.validation}
          validation={validation}
          onClick={handleClickChild}
        />
      )}
    </div>
  );
};

function getRows(multiline?: boolean | number) {
  if (!multiline) return undefined;

  return typeof multiline === 'number' ? multiline : 1;
}
