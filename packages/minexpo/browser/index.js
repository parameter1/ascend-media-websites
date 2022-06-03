import Directory from '@ascend-media/package-directory/browser';
import ContactUs from '@parameter1/base-cms-marko-web-contact-us/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';

const PaginationPageNumberInput = () => import(/* webpackChunkName: "minexpo-pagination-page-number-input" */ './pagination-page-number-input.vue');

export default (Browser) => {
  ContactUs(Browser);
  Directory(Browser);
  Inquiry(Browser);
  Browser.registerComponent('PaginationPageNumberInput', PaginationPageNumberInput);
};
