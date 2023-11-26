import { combine, is } from 'effector';
import { useEvent, useStore, useStoreMap, useUnit } from 'effector-react';
import { createLib } from 'effector-view';

const { createView, connect } = createLib({
  useStore,
  useEvent,
  combine,
  useUnit,
  useStoreMap,
  is,
});

export { connect, createView };
