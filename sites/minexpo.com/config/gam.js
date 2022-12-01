const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('6407152', { basePath: 'minexpo' });

config
  .setTemplate('leaderboard', {
    size: [[970, 90], [320, 50], [300, 50], [300, 100], [300, 250]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90]] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100], [300, 250]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'leaderboard', path: 'lb1' },
    { name: 'rail1', options: { size: [300, 250] }, path: 'rail1' },
    { name: 'rail2', options: { size: [300, 600] }, path: 'rail2' },
    { name: 'rail3', options: { size: [300, 250] }, path: 'rail3' },
    { name: 'rail4', options: { size: [300, 250] }, path: 'rail4' },
  ]);

module.exports = config;
