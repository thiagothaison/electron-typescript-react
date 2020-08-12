module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: 'common',
            rootPathSuffix: 'src/common',
          },
          {
            rootPathPrefix: 'main',
            rootPathSuffix: 'src/main',
          },
          {
            rootPathPrefix: 'renderer',
            rootPathSuffix: 'src/renderer',
          },
        ],
      },
    ],
  ],
};
