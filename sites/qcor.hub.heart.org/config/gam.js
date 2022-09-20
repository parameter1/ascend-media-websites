const configureGAM = require('@ascend-media/package-daily/config/gam');

const config = configureGAM({ basePath: 'hearthubs' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'vascular-lb1' },
    { name: 'lb2', templateName: 'LB', path: 'vascular-lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vascular-rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'vascular-rail2' },
  ]);

module.exports = config;
