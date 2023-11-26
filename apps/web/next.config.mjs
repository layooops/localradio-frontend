const imageDomain = process.env.NEXT_PUBLIC_IMAGES_DOMAIN;

const config = {
  eslint: {
    dirs: ['src', 'pages'],
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    loader: 'default',
    dangerouslyAllowSVG: false,
    disableStaticImages: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [imageDomain],
    unoptimized: false,
  },
  reactStrictMode: true,
  transpilePackages: [],
  swcMinify: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default config;
