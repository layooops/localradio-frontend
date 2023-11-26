import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { TextInput } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'ui/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export function TextFiled() {
  const [textFieldValue, setTextFieldValue] = useState('Jaded Pixel');

  const handleTextFieldChange = useCallback((value: string) => setTextFieldValue(value), []);

  return (
    <TextInput
      placeholder='Placeholder'
      label='Label'
      value={textFieldValue}
      onChange={handleTextFieldChange}
      selectTextOnFocus
      autoComplete='off'
      validation={{ status: 'valid', text: 'Validation Text' }}
      mode='clear'
      multiline={5}
    />
  );
}
