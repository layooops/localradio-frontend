import type { HomePageProps } from '@/pages/home-page/lib/types/home-page.interface';
import type { GetServerSidePropsResult, NextPage } from 'next';
import type { GetServerSideProps } from 'next/types';

import { defaultMixes } from '@/entities/mix/api';
import { defaultReleases } from '@/entities/release/api';
import { getHomePageData } from '@/pages/home-page/api/get-home-page-data';
import { HomePage } from '@/pages/home-page/ui/home-page';
import { randomIntFromInterval } from '@/shared/lib/helpers/random-int-from-iterval';
import { Seo } from '@/shared/ui/seo/seo';

const Page: NextPage<HomePageProps> = (props) => {
  return (
    <>
      <Seo />
      <HomePage {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<GetServerSidePropsResult<HomePageProps>> => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  try {
    const data = await getHomePageData();

    return {
      props: data,
    };
  } catch (error) {
    const minIndex = 0;
    const maxIndex = defaultMixes.data.length - 1;
    const rndMixInt = randomIntFromInterval(minIndex, maxIndex);
    const randomMix = defaultMixes.data[rndMixInt];
    return {
      props: {
        mixes: defaultMixes,
        releases: defaultReleases,
        homePageRandomMix: {
          data: randomMix,
        },
      },
    };
  }
};

export default Page;
