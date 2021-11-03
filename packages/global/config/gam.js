const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

module.exports = ({
  accountId = '6407152',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('leaderboard', {
      size: [[970, 250], [970, 90], [728, 90], [320, 50], [300, 50]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[320, 50], [300, 50]] },
      ],
    })
    .setTemplate('rail', { size: [[300, 250], [300, 600]] })
    .setTemplate('load-more', { size: [300, 250] });

  return config;
};
