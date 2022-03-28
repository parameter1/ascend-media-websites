const configureGAM = require('@ascend-media/package-daily/config/gam');

const config = configureGAM({ basePath: 'imex-ff' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'lb1' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail1' },
    { name: 'rail2', templateName: 'RAIL1', path: 'rail2' },
    { name: 'column1', templateName: 'COLUMN1', path: 'column1' },
    { name: 'reskin', path: 'reskin' },
  ]);

module.exports = config;
