const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://a0ywr6qc.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;