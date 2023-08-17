import type { AboutPageProps } from '@/pages/about-page/ui/about-page';
import type { Description } from '@/shared/lib/types/description.interface';
import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';

import { AboutDocument } from '@/pages/about-page/api/about.graphql.interface';
import { defaultAbout } from '@/pages/about-page/api/default-about';
import { AboutPage } from '@/pages/about-page/ui/about-page';
import { client } from '@/shared/api/apollo/apollo-client';
import { getMarkdownToHtml } from '@/shared/lib/helpers/markdown-to-html';
import { Seo } from '@/shared/ui/seo/seo';

const Page: NextPage<AboutPageProps> = ({ description }) => {
  return (
    <>
      <Seo templateTitle='About' />
      <AboutPage description={description} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<AboutPageProps>
> => {
  try {
    const {
      data: { about },
    } = await client.query({
      query: AboutDocument,
    });

    const description = (await getMarkdownToHtml(
      about?.data?.attributes,
    )) as Description;

    return {
      props: { description },
    };
  } catch (error) {
    return {
      props: { description: defaultAbout },
    };
  }
};

export default Page;
