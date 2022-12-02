const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('6407152', { basePath: 'hearthubs' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [728, 90], [300, 250], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 250], [300, 50]] },
    ],
  })
  .setTemplate('RAIL1', { size: [[300, 250]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'rail2' },
  ])
  .setAliasAdUnits('vascular', [
    { name: 'lb1', templateName: 'LB', path: 'vascular-lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vascular-rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'vascular-rail2' },
  ]);

module.exports = config;
