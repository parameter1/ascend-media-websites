const configureNativeX = require('@ascend-media/package-global-monorail/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '62f15b7621ed000001cc665a' },
  ]);

module.exports = config;
