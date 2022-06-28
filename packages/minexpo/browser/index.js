import Directory from '@ascend-media/package-directory/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "shared-image-slider" */ './image-slider.vue');
const MinexpoGTMTrackLeaders = () => import(/* webpackChunkName: "shared-gtm-track-leaders" */ './gtm-track-leaders.vue');
const MinexpoLeadersCompanyWebsiteLink = () => import(/* webpackChunkName: "common-leaders-company-website-link" */ './leaders-company-website-link.vue');
const MinexpoLeadersCompanySocialLink = () => import(/* webpackChunkName: "common-leaders-company-social-link" */ './leaders-company-social-link.vue');
const PaginationPageNumberInput = () => import(/* webpackChunkName: "shared-pagination-page-number-input" */ './pagination-page-number-input.vue');

export default (Browser) => {
  ContactUs(Browser);
  Directory(Browser);
  Inquiry(Browser);
  Browser.registerComponent('PaginationPageNumberInput', PaginationPageNumberInput);
  const { EventBus } = Browser;
  Browser.registerComponent('MinexpoGTMTrackLeaders', MinexpoGTMTrackLeaders, { provide: { EventBus } });
  Browser.registerComponent('MinexpoLeadersCompanyWebsiteLink', MinexpoLeadersCompanyWebsiteLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Browser.registerComponent('MinexpoLeadersCompanySocialLink', MinexpoLeadersCompanySocialLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Leaders(Browser);

  Browser.register('CommonImageSlider', ImageSlider);
};
