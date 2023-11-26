import { memo } from 'react';
import type { MixButtonProps } from '@/entities/mix/lib/types/mix-button.interface';
import { MixCardButtonWithMemo } from '@/entities/mix/ui/mix-card-buttons/mix-card-button';
import { useYoutubeBottomPlayer } from '@/features/toggle-mix-player/hooks/use-youtube-toggle.hook';

export const MixYoutubeButton = memo(
  ({ sizeVariant, slug, mixLink }: MixButtonProps) => {
    const { isActive, handlePlay } = useYoutubeBottomPlayer({
      slug,
      mixLink,
    });

    return (
      <MixCardButtonWithMemo
        variant='youtube'
        sizeVariant={sizeVariant}
        ariaLabel='Play and pause soundcloud player'
        onClick={handlePlay}
        active={isActive}
      />
    );
  },
);
