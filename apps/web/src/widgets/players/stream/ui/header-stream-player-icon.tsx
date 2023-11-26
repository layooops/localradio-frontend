import { Icon } from '@/shared/ui/icons';

interface HeaderStreamPlayerIconProps {
  globalPlayerIsSteam: boolean;
  streamIsLoaded: boolean;
  isClickedSteamPlay: boolean;
}

export const HeaderStreamPlayerIcon = ({
  globalPlayerIsSteam,
  isClickedSteamPlay,
  streamIsLoaded,
}: HeaderStreamPlayerIconProps) => {
  if (streamIsLoaded && isClickedSteamPlay && globalPlayerIsSteam)
    return (
      <div className='mx-2 w-[15px] 2xl:w-[1.3rem]'>
        <Icon.PauseIcon />
      </div>
    );
  if (streamIsLoaded)
    return (
      <div className='relative mx-2 w-[15px] 2xl:w-[1.3rem]'>
        <Icon.PlayIcon />
      </div>
    );
  return null;
};
