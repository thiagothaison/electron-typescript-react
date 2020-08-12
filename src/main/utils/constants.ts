import * as path from 'path';
import * as url from 'url';

const PORT = process.env.PORT || 4000;

export const APP_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${PORT}`
    : url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      });
