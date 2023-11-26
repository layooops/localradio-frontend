import LinkToStory from '@storybook/addon-links/react';
import { ComponentTitle, StoryName } from '@storybook/types';
import { PropsWithChildren } from 'react';
import classes from './link-to.module.css';

interface LinkToStoryProps {
  kind?: string;
  title?: ComponentTitle;
  story?: StoryName;
  name?: StoryName;
}
interface LinkToProps extends PropsWithChildren, LinkToStoryProps {}

export const LinkTo = ({ children, ...rest }: LinkToProps) => {
  return (
    <LinkToStory className={classes.link} {...rest}>
      {children}
    </LinkToStory>
  );
};
