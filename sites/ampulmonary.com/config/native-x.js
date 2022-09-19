const configureNativeX = require('@ascend-media/package-global-monorail/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '63121de0d5ffd50001d659fb' },
    { name: 'industry-insights', id: '63121e39d5ffd50001d65a7c' },
  ]);

module.exports = config;
