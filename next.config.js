// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/Portfolio-next.js/' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  basePath: isProd ? '/Portfolio-next.js' : '',
};
