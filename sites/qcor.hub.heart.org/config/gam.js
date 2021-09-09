const configureGAM = require('@ascend-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'hearthubs' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'lb1' },
    { name: 'lb2', templateName: 'LB', path: 'lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'rail2' },
  ]);

module.exports = config;
