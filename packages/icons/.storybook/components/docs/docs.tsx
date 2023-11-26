import {
  Controls,
  Description,
  DocsContext,
  Primary,
  Stories,
  Subtitle,
  Title,
  Wrapper,
} from '@storybook/blocks';
import React from 'react';
import { IconMetadata } from '../../../src/types/icon';
import classes from './docs.module.css';

interface DocsProps {}

export const Docs = (props: DocsProps) => {
  const context = React.useContext(DocsContext);
  const metadata: IconMetadata =
    context?.componentStories()?.at(0)?.parameters?.docs.iconMetadata ?? {};
  return (
    <>
      <Title />
      <Description />
      <Subtitle />
      <div className={classes.metadata}>
        {Boolean(metadata.keywords?.length) && (
          <div>
            <div style={{ paddingBottom: '4px' }}>keywords</div>
            <div className={classes['metadata-list']}>
              {metadata?.keywords?.map((tag) => {
                return (
                  <div key={tag} className={classes['tag']}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {Boolean(metadata.authors?.length) && (
          <div>
            <div style={{ paddingBottom: '4px' }}>authors</div>
            <div className={classes['metadata-list']}>
              {metadata?.authors?.map((author) => {
                return (
                  <div key={author} className={classes['tag']}>
                    {author}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {Boolean(metadata.package) && (
          <div>
            <div style={{ paddingBottom: '4px' }}>package</div>
            <div className={classes['metadata-list']}>
              <div>{metadata.package}</div>
            </div>
          </div>
        )}
      </div>

      <Primary />
      <Controls />
      <Stories />
    </>
  );
};
