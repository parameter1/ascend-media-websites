import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';

const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');

export default (Browser) => {
  MonoRail(Browser, { enableOmedaIdentityX: false });
  ContactUs(Browser);
  Browser.register('ContentMeterTrack', ContentMeterTrack);
};
