import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { defaultAbout } from '@/defaults/defaults';
import { AboutDocument } from '@/pages/about/api/about.graphql.interface';
import { AboutPage } from '@/pages/about/ui/about-page';
import { client } from '@/shared/api/apollo/apollo-client';
import { getMarkdownToHtml } from '@/shared/lib/markdown-to-html';
import type { Description } from '@/shared/lib/types/description.interface';
import { Seo } from '@/shared/ui/seo/seo';

export interface AboutPageProps {
  description: Description | null;
}

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
      about?.data?.attributes
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
