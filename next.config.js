/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = {
  webpack: (
    nextConfig,
    {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    nextConfig.module.rules.push({
      test: /\.(woff|woff2)$/i,
      use: [
        {
          loader: 'url-loader',
        },
      ],
    })

    return nextConfig;
  },
}
