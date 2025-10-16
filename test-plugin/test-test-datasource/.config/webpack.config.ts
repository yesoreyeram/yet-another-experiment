const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports.getWebpackConfig = (config, options) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [
        ...(config.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        }),
      ],
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../src'),
      },
    },
  };
};

