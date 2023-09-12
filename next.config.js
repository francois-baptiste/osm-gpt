/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  output: 'export',
  basePath: '/out',
  reactStrictMode: false,
    swcMinify: false,
});
