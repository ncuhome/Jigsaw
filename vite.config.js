import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

const srcPath = path.resolve(__dirname, './src');

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactRefresh],
  alias: {
    '@': srcPath,
  },
};

export default config;
