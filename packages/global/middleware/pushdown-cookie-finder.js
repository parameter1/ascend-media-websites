const { get } = require('@parameter1/base-cms-object-path');

const cookieName = 'seenPushdown';

module.exports = () => (req, res, next) => {
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));

  if (!hasCookie) {
    // Expire in 2yr if not already present
    const days = 730;
    const maxAge = days * 24 * 60 * 60 * 1000;
    res.cookie(cookieName, true, { maxAge });
  }

  res.locals.pushdownState = { hasCookie };
  next();
};
