const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: "export",
  assetPrefix: isProd ? '/Portfolio-next.js/' : '',
  images: {
    unoptimized: true, 
  },
  basePath: isProd ? '/Portfolio-next.js' : '',
};

