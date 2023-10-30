const { get } = require('@parameter1/base-cms-object-path');
const defaultValue = require('@parameter1/base-cms-marko-core/utils/default-value');

const cookieName = 'enlPrompted';
const newsletterState = ({ setCookie = true } = {}) => (req, res, next) => {
  const newsletterConfig = req.app.locals.site.getAsObject('newsletter');
  const maxAgeInDays = defaultValue(get(newsletterConfig, 'pushdown.maxAgeInDays'), 14);
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const disabled = get(req, 'query.newsletterDisabled');
  // Expire in 14 days (2yr if already signed up)
  const maxAge = maxAgeInDays * 24 * 60 * 60 * 1000;
  const canBeInitiallyExpanded = !(hasCookie || disabled);
  const initiallyExpanded = ((setCookie === true) && canBeInitiallyExpanded) || maxAge === 0;

  if (initiallyExpanded && maxAge !== 0) {
    res.cookie(cookieName, true, { maxAge });
  }

  res.locals.newsletterState = {
    hasCookie,
    disabled,
    initiallyExpanded,
    // set this for other middlewares to know it can be set later
    // if formatContentResponse conditions are met
    canBeInitiallyExpanded,
    cookie: { name: cookieName, maxAge },
  };
  next();
};

const formatContentResponse = ({ res, content }) => {
  if (!res.locals.newsletterState) return;
  const {
    initiallyExpanded,
    hasCookie,
    disabled,
    cookie,
  } = res.locals.newsletterState;

  if (get(content, 'userRegistration.isCurrentlyRequired') === true) {
    res.locals.newsletterState.initiallyExpanded = false;
  } else if (!initiallyExpanded && !hasCookie && !disabled) {
    res.cookie(cookie.name, true, { maxAge: cookie.maxAge });
    res.locals.newsletterState.initiallyExpanded = true;
  }
};

module.exports = {
  newsletterState,
  formatContentResponse,
};
