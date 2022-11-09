const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('6407152', { basePath: 'bulletin' });

config
  .setTemplate('leaderboard', {
    size: [[728, 90], [600, 100], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [750, 0], size: [[728, 90]] },
      { viewport: [620, 0], size: [[600, 100]] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('leaderboard600x100', {
    size: [[600, 100], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [620, 0], size: [[600, 100]] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'leaderboard', path: 'lb1' },
    { name: 'lb2', templateName: 'leaderboard600x100', path: 'lb2' },
    { name: 'lb3', templateName: 'leaderboard600x100', path: 'lb3' },
    { name: 'rail1', options: { size: [300, 250] }, path: 'rail1' },
    { name: 'rail2', options: { size: [300, 250] }, path: 'rail2' },
    { name: 'rail3', options: { size: [300, 250] }, path: 'rail3' },
  ]);

module.exports = config;
