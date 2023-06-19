const { get } = require('@parameter1/base-cms-object-path');

const cookieName = 'enlPrompted';
const newsletterState = ({ setCookie = true } = {}) => (req, res, next) => {
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const disabled = get(req, 'query.newsletterDisabled');
  const canBeInitiallyExpanded = !(hasCookie || disabled);
  const initiallyExpanded = (setCookie === true) && canBeInitiallyExpanded;

  // Expire in 14 days (2yr if already signed up)
  const days = 365 * 2 || 14;
  const maxAge = days * 24 * 60 * 60 * 1000;

  if (initiallyExpanded) {
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