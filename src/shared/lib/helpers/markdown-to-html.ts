import { remark } from 'remark';
import html from 'remark-html';
import type { Maybe } from 'yup';
import { Description } from '../types/description.interface';

async function markdownGen(markdown: string) {
  // TODO: Убрать any когда пофиксят
  const result = await remark()
    .use(html as any)
    .process(markdown);
  return result.toString();
}

export const markdownToHtml = async (data: Maybe<string>) => {
  if (data) return markdownGen(data);
  return null;
};

export type MarkdownResponse = Maybe<Description> | Maybe<string>;

export const getMarkdownToHtml = async (
  data?: Description | null | string
): Promise<MarkdownResponse> => {
  if (typeof data === 'string') return markdownToHtml(data);
  if (typeof data === 'object') {
    return {
      descriptionEn: await markdownToHtml(data?.descriptionEn ?? data?.textEn),
      descriptionRu: await markdownToHtml(data?.descriptionRu ?? data?.textRu),
    };
  }
  return null;
};
