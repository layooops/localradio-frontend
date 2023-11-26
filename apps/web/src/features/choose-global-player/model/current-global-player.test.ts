import { fork } from 'effector';
import {
  $currentGlobalPlayer,
  currentPlayer,
  setCurrentGlobalPlayerEv,
} from './current-global-player.model';

describe('current global player', () => {
  it('is null', () => {
    setCurrentGlobalPlayerEv(null);

    const scope = fork(currentPlayer);

    expect(scope.getState($currentGlobalPlayer)).toBeNull();
  });

  describe('stream', () => {
    it('is stream', () => {
      setCurrentGlobalPlayerEv('stream');

      const scope = fork(currentPlayer);

      expect(scope.getState($currentGlobalPlayer)).toBe('stream');
    });
    it('is not stream', () => {
      setCurrentGlobalPlayerEv('soundcloud');

      const scope = fork(currentPlayer);

      expect(scope.getState($currentGlobalPlayer)).not.toBe('stream');
    });
  });
  describe('soundcloud', () => {
    it('is soundcloud', () => {
      setCurrentGlobalPlayerEv('soundcloud');

      const scope = fork(currentPlayer);

      expect(scope.getState($currentGlobalPlayer)).toBe('soundcloud');
    });
    it('is not soundcloud', () => {
      setCurrentGlobalPlayerEv(null);

      const scope = fork(currentPlayer);

      expect(scope.getState($currentGlobalPlayer)).not.toBe('soundcloud');
    });
  });
});
