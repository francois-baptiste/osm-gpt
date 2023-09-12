/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  basePath: '/out',
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'avif'],
  ],
}

module.exports = config
