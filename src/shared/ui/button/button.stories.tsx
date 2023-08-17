import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icons';
import { Button } from './button';

const meta = {
  title: 'Ui/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    children: 'Button',
    colorVariant: 'primary',
    sizeVariant: 'standard',
  },
};

export const LinkSecondary: Story = {
  args: {
    children: 'link',
    colorVariant: 'primary',
    href: 'https://radiolocal.online',
    sizeVariant: 'standard',
  },
};

export const SmallLinkWithIcon: Story = {
  args: {
    children: <Icon.VkMusicIcon className='fill-inherit' />,
    colorVariant: 'secondary',
    href: 'https://radiolocal.online',
    sizeVariant: 'extra-small',
  },
};
