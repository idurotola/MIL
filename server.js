const express = require('express');
const app = express();
const path = require('path');
const config = require('./src/utils/config');
const proxy = require('http-proxy-middleware');

const PORT = process.env.PORT || 3000;

app.use('/api', proxy(config.PROXY_OPTIONS));
app.use(express.static('./dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});
app.listen(PORT);

console.log(`Server Started at port ${PORT}`); // eslint-disable-line

