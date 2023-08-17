import type { ImageProps } from 'next/image';

import Image from 'next/image';

type NextImageProps = {
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width?: string | number;
} & { width?: string | number; height?: string | number } & ImageProps;

export function NextImage({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}: NextImageProps) {
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image src={src} width={width} height={height} alt={alt} {...rest} />
    </figure>
  );
}
