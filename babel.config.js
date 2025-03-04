module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@icons': './src/assets/icons/index',
          '@images': './src/assets/images/index',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
