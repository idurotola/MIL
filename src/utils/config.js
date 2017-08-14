const CONTENT_TYPE = process.env.Content_Type || 'application/json';
const ACCEPT = process.env.ACCEPT || 'application/json;version=5.1.0';
const API_HOST = process.env.API_HOST;
const HTTP_HEADERS = {
  'Content-Type': CONTENT_TYPE,
  Accept: ACCEPT,
};

const PROXY_OPTIONS = {
  target: API_HOST,
  changeOrigin: true,
  headers: HTTP_HEADERS,
  secure: false,
  pathRewrite: {'^/api/': ''},
};

module.exports = {
  CONTENT_TYPE,
  ACCEPT,
  PROXY_OPTIONS,
};
