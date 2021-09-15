const configureGAM = require('@ascend-media/package-global/config/gam');

const config = configureGAM({ basePath: 'sessions' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'leaderboard', path: 'lb1' },
    { name: 'rail1', templateName: 'rail', path: 'rail1' },
    { name: 'rail2', templateName: 'rail', path: 'rail2' },
    { name: 'rail3', templateName: 'rail', path: 'rail3' },
    { name: 'load-more', templateName: 'load-more', path: 'load-more' },
  ]);

module.exports = config;
