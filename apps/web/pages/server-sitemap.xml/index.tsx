import type { GetServerSideProps } from 'next';
import type { ISitemapField } from 'next-sitemap';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import { SitemapApi } from '@/features/sitemap/api';
import { client } from '@/shared/api/apollo/apollo-client';
import { SITE_URL } from '@/shared/config/environment';

interface CommonAttributes {
  name: string;
  slug: string;
}

const getSitemap = (
  elements: { attributes: Pick<CommonAttributes, 'slug'> }[] | any,
  s: string,
): ISitemapField[] => {
  return elements.map(
    ({ attributes }: { attributes: Pick<CommonAttributes, 'slug'> }) => ({
      loc: `${SITE_URL}/${s}/` + attributes.slug,
      lastmod: new Date().toISOString(),
    }),
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    data: { guests, mixes, shows, genres, moods, releases, events },
  } = await client.query({
    query: SitemapApi.SitemapDocument,
  });

  const archiveMixesSitemap = getSitemap(mixes, 'archive');
  const archiveResidentsSitemap = getSitemap(guests, 'archive/residents');
  const archiveShowsSitemap = getSitemap(shows, 'archive/shows');
  const genresShowsSitemap = getSitemap(genres, 'archive/genres');
  const moodsShowsSitemap = getSitemap(moods, 'archive/mood');
  const releasesSitemap = getSitemap(releases, 'releases');
  const eventsSitemap = getSitemap(events, 'events');

  const fields = [
    archiveMixesSitemap,
    archiveResidentsSitemap,
    archiveShowsSitemap,
    genresShowsSitemap,
    moodsShowsSitemap,
    releasesSitemap,
    eventsSitemap,
  ].flat();

  const sitemap = await getServerSideSitemapLegacy(context, fields);

  return sitemap;
};

export default function Site() {}
