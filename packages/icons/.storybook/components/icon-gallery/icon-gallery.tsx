import { IconItem, Source, IconGallery as StoryIconGallery } from '@storybook/blocks';
import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { LinkTo } from '../link';
import { Modal, useModal } from '../modal';
interface IconGalleryProps {
  icons: JSX.IntrinsicElements;
}

interface ModalProps {
  link?: { title: string; story: string; kind?: string };
}

export const IconGallery = ({ icons }: IconGalleryProps) => {
  const { modalVisible, showModal, closeModal } = useModal();
  const [sourceCode, setSourceCode] = useState<{ Code: string; title: string }>({
    Code: '',
    title: 'Icon',
  });
  const [modalProps, setModalProps] = useState<ModalProps | undefined>();
  const openIcon = ({
    sourceCode,
    modalProps,
  }: {
    sourceCode: { title: string; Code: string };
    modalProps: ModalProps;
  }) => {
    showModal();
    setSourceCode(sourceCode);
    setModalProps(modalProps);
  };
  const { Code, title } = sourceCode;
  return (
    <StoryIconGallery>
      {Object.entries(icons).map(([name, IconComponent]) => (
        <IconItem key={name} name={name}>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              height: '100%',
            }}
            type='button'
            onClick={() =>
              openIcon({
                sourceCode: { Code: IconComponent, title: name },
                modalProps: { link: { title: `icons-${name}`, story: 'documentation' } },
              })
            }
          >
            <IconComponent />
          </button>
        </IconItem>
      ))}
      {modalVisible && (
        <Modal title={title} onClose={closeModal}>
          <Source language='tsx' code={reactElementToJSXString(<Code />)} />
          <div>
            <IconItem name={''}>
              <LinkTo
                kind={modalProps?.link?.kind}
                story={modalProps?.link?.story}
                title={modalProps?.link?.title}
              >
                <Code />
              </LinkTo>
            </IconItem>
            <div>Open {title}</div>
          </div>
        </Modal>
      )}
    </StoryIconGallery>
  );
};
