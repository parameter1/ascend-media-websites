import Vue from '@parameter1/base-cms-marko-web/browser/vue';
import VModal from 'vue-js-modal/dist/index.nocss';
import jQuery from '@parameter1/base-cms-marko-web/browser/jquery-full';

import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';

Vue.use(VModal);

const CompanyProfileWebsiteLink = () => import(/* webpackChunkName: "company-profile-website-link" */ './website-link.vue');
const CompanyProfileSocialLink = () => import(/* webpackChunkName: "company-profile-social-link" */ './social-link.vue');
const NoticePushdown = () => import(/* webPackChunkName: "jump-modal" */ './notice-pushdown.vue');

window.jQuery = jQuery;
window.$ = jQuery;

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  Inquiry(Browser);

  Browser.register('CompanyProfileWebsiteLink', CompanyProfileWebsiteLink);
  Browser.register('CompanyProfileSocialLink', CompanyProfileSocialLink);
  Browser.register('NoticePushdown', NoticePushdown);
};
