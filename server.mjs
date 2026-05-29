import express from 'express';
import compression from 'compression';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());

const YEAR = 31536000;
const MONTH = 2592000;

function setHeaders(res, filePath) {
  const rel = path.relative(dist, filePath).replace(/\\/g, '/');
  if (rel.startsWith('_astro/')) {
    res.setHeader('Cache-Control', `public, max-age=${YEAR}, immutable`);
  } else if (/\.(webp|jpe?g|png|gif|svg|ico|webm|mp4|woff2?|ttf|otf)$/i.test(rel)) {
    res.setHeader('Cache-Control', `public, max-age=${MONTH}`);
  } else if (/\.(css|js)$/i.test(rel)) {
    res.setHeader('Cache-Control', `public, max-age=${MONTH}`);
  } else if (/\.html?$/i.test(rel) || rel === '' || !path.extname(rel)) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  }
}

app.use(express.static(dist, {
  extensions: ['html'],
  setHeaders,
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(dist, '404.html'), (err) => {
    if (err) res.status(404).type('text/plain').send('Not Found');
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
