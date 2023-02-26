import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "minexpo-image-slider" */ './image-slider.vue');
const MinexpoGTMTrackLeaders = () => import(/* webpackChunkName: "minexpo-gtm-track-leaders" */ './gtm-track-leaders.vue');
const MinexpoLeadersCompanyWebsiteLink = () => import(/* webpackChunkName: "minexpo-leaders-company-website-link" */ './leaders-company-website-link.vue');
const MinexpoLeadersCompanySocialLink = () => import(/* webpackChunkName: "minexpo-leaders-company-social-link" */ './leaders-company-social-link.vue');
const PaginationPageNumberInput = () => import(/* webpackChunkName: "minexpo-pagination-page-number-input" */ './pagination-page-number-input.vue');
const AutoScroll = () => import(/* webpackChunkName: "minexpo-auto-scroll" */ './auto-scroll.vue');

export default (Browser) => {
  ContactUs(Browser);
  Inquiry(Browser);
  Browser.register('MinexpoPaginationPageNumberInput', PaginationPageNumberInput);
  const { EventBus } = Browser;
  Browser.register('MinexpoGTMTrackLeaders', MinexpoGTMTrackLeaders, { provide: { EventBus } });
  Browser.register('MinexpoLeadersCompanyWebsiteLink', MinexpoLeadersCompanyWebsiteLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Browser.register('MinexpoLeadersCompanySocialLink', MinexpoLeadersCompanySocialLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Leaders(Browser);

  Browser.register('MinexpoImageSlider', ImageSlider);
  Browser.register('MinexpoAutoScroll', AutoScroll);
};
