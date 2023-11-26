import { IconArrowDown, IconArrowLeft } from '@local-radio/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/ui';
import { ButtonGroup, ButtonGroupProps } from './button-group';

const icons = { IconArrowDown, IconArrowLeft };

const defaultArgs: ButtonGroupProps = {
  size: 'medium',
  children: [
    <Button appearance='secondary' fullWidth={false} children='First Button' />,
    <Button appearance='secondary' fullWidth={false} children='Middle Button' />,
    <Button appearance='secondary' fullWidth={false} children='Middle Button' />,
    <Button appearance='secondary' fullWidth={false} children='Middle Button' />,
    <Button appearance='secondary' fullWidth={false} children='Last Button' />,
  ],
};

const meta = {
  title: 'ui/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};
