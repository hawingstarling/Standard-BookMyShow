module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.json'],
          alias: {
            '@': './src',
          },
        },
      ],
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};