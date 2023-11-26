import { Link } from '@local-radio/ui';

interface ArchiveNavBarProps {
  list?:
    | ({
        name?: string | null | undefined;
        slug?: string | null | undefined;
      } | null)[]
    | null;
  index: number;
  variant: 'mood' | 'genres';
}

export const ArchiveNavHoverList = ({
  list,
  index,
  variant,
}: ArchiveNavBarProps) => {
  const slug = list && list[0]?.slug;
  return (
    <ul
      key={slug && slug + index}
      className='flex flex-col justify-center gap-1'
    >
      {list?.map((item) => (
        <li key={item?.name}>
          <Link.Internal
            className='h-full whitespace-nowrap px-1 py-0.5 font-semibold tracking-[0.01em] transition-none lg:px-2'
            href={`/archive/${variant}/${item?.slug}`}
          >
            {item?.name}
          </Link.Internal>
        </li>
      ))}
    </ul>
  );
};
