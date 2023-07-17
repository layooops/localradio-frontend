import { useUnit } from 'effector-react';
import { useState } from 'react';
import SoundCloudPlayer from 'react-player/soundcloud';
import {
  $currentGlobalPlayer,
  setCurrentGlobalPlayerEv,
} from '@/features/choose-global-player/model/current-global-player.model';
import { clsxm } from '@/shared/lib/helpers/clsxm';
import { Icon } from '@/shared/ui/icons';
import { BottomPlayerNav } from '../../bottom-player-nav/ui/bottom-player-nav';
import { $randomMixes } from '../model/sc-random-mixes.model';
import {
  $currentSCLink,
  $isClickedPlaySc,
  isClickedPlayScEv,
  openWidgetEv,
  setCurrentScLinkEv,
  setIsSCPlayingEv,
  setLinkToMixEv,
} from '../model/soundcloud.model';

export const SCPlayer = () => {
  const [loaded, setLoaded] = useState(false);
  const {
    setLinkToMix,
    setCurrentScLink,
    openScWidget,
    setCurrentGlobalPlayer,
    setSCIsPlaying,
    setIsClickedPlaySc,
  } = useUnit({
    setCurrentScLink: setCurrentScLinkEv,
    setCurrentGlobalPlayer: setCurrentGlobalPlayerEv,
    openScWidget: openWidgetEv,
    setLinkToMix: setLinkToMixEv,
    setSCIsPlaying: setIsSCPlayingEv,
    setIsClickedPlaySc: isClickedPlayScEv,
  });

  const { currentSCLink, isClickedPlaySc, currentGlobalPlayer, randomMixes } =
    useUnit({
      randomMixes: $randomMixes,
      currentGlobalPlayer: $currentGlobalPlayer,
      currentSCLink: $currentSCLink,
      isClickedPlaySc: $isClickedPlaySc,
    });

  const handleOnEndedPlayer = () => {
    let currentLink = '';
    if (
      randomMixes[0]?.attributes &&
      randomMixes[0]?.attributes.linksToMixes?.soundcloudLink
    )
      currentLink = randomMixes[0]?.attributes?.linksToMixes?.soundcloudLink;
    setCurrentScLink(currentLink);

    setLinkToMix(
      randomMixes && randomMixes[0]?.attributes?.slug
        ? randomMixes[0]?.attributes.slug
        : ''
    );
  };

  return (
    <div
      className={clsxm(
        'relative flex w-full flex-col items-center justify-center ',
        { flex: currentGlobalPlayer === 'soundcloud' },
        { 'flex md:hidden': currentGlobalPlayer !== 'soundcloud' }
      )}
    >
      <BottomPlayerNav variant='soundcloud' loaded={loaded} />

      <div className='relative isolate flex h-[var(--player-height)] w-full items-center border-t-2 border-black  bg-primary lg:h-auto lg:border-none lg:bg-transparent'>
        <div className='h-[20px] w-full px-3  lg:h-[100px] lg:p-0'>
          {!loaded && (
            <div className=' absolute inset-0 flex items-center gap-5 border-black bg-primary px-1.5 text-[0.8rem] font-semibold uppercase leading-none lg:border-t-2 lg:px-2 lg:text-[0.875rem] xl:px-3.5 xl:text-[0.95rem] 2xl:text-[1rem]'>
              <Icon.Loader className='h-[15px] w-[15px] fill-black text-white dark:text-gray-600 lg:h-[1.25rem] lg:w-[1.25rem] 2xl:h-[1.5rem] 2xl:w-[1.5rem]' />
              <span className='hidden xxs:inline-block'>
                SoundCloud player is loading...
              </span>
            </div>
          )}
          {currentSCLink && (
            <SoundCloudPlayer
              url={currentSCLink}
              config={{
                options: {
                  show_user: false,
                  visual: false,
                  show_teaser: false,
                  color: '#000',
                },
              }}
              onEnded={handleOnEndedPlayer}
              onPlay={() => {
                setSCIsPlaying(true);
                setCurrentGlobalPlayer('soundcloud');
              }}
              onPause={() => {
                setSCIsPlaying(false);
                setIsClickedPlaySc(false);
              }}
              onReady={() => {
                setLoaded(true);
                openScWidget(true);
              }}
              frameBorder='no'
              width='100%'
              height='100%'
              playing={Boolean(
                isClickedPlaySc && currentGlobalPlayer === 'soundcloud'
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
