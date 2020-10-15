module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/Components',
          '@screen': './src/Components/Screen',
          '@data': './src/Data',
          '@util': './src/Util',
          '@images': './src/Assets/images',
        },
      },
    ],
  ],
};
