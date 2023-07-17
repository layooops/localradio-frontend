import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { defaultMixes } from '@/defaults/defaults';
import { MixPageProps } from '@/pages/mix';
import { getMixPageData } from '@/pages/mix/api/get-mix-page-data';
import { getMixPageSeo } from '@/pages/mix/api/get-mix-page-seo';
import { MixPage } from '@/pages/mix/ui/mix-page';
import { Seo } from '@/shared/ui/seo/seo';

const Page: NextPage<MixPageProps> = (props) => {
  const attributes = props.mixes?.data[0].attributes;
  const { fullSeoDescription, schema, imageSeo, fullSeoTitle } =
    getMixPageSeo(attributes);

  return (
    <>
      <Seo
        templateTitle={fullSeoTitle}
        description={fullSeoDescription}
        image={imageSeo}
        schema={schema}
      />
      <MixPage {...props} />
    </>
  );
};

interface MixPageParams extends ParsedUrlQuery {
  mix: string;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<MixPageProps>> => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { mix } = context.params as MixPageParams;
  try {
    const data = getMixPageData({ slug: mix });

    return {
      props: data,
    };
  } catch (error) {
    const mixes = defaultMixes.data.find(
      (data) => data.attributes?.slug === mix
    );
    if (mixes)
      return {
        props: { mixes: { data: mixes ? [mixes] : [] } },
      };

    return { props: {} };
  }
};

export default Page;
