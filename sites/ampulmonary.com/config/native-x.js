const configureNativeX = require('@ascend-media/package-global-monorail/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '642ae80aff54a300018505a3' },
  ]);

module.exports = config;
