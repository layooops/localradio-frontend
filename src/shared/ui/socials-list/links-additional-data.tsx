import type { ComponentLinksToSocialsLinksToSocials } from '@/shared/api/graphql/__generated__/schema.graphql';

import { Icon } from '@/shared/ui/icons';

export const AdditionalDataIconClasses =
  'h-[clamp(12px,6vw,15px)] w-[clamp(12px,6vw,15px)] lg:h-[20px] lg:w-[20px]';

type SocialsLinksKeys = keyof Omit<
  ComponentLinksToSocialsLinksToSocials,
  'id' | '__typename'
>;

interface LinkAdditionalData {
  color?: string;
  icon: JSX.Element;
  title?: string;
}

export type AdditionalDataRecord<T extends string> = Record<
  T,
  LinkAdditionalData | null
>;

export const socialsAdditionalData: AdditionalDataRecord<SocialsLinksKeys> = {
  SCLink: { icon: <Icon.SCIcon className={AdditionalDataIconClasses} /> },
  BCLink: { icon: <Icon.BandcampIcon className={AdditionalDataIconClasses} /> },
  TGLink: { icon: <Icon.TGIcon className={AdditionalDataIconClasses} /> },
  VKLink: { icon: <Icon.VKIcon className={AdditionalDataIconClasses} /> },
  IGLink: null,
};
