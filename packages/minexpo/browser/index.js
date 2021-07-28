import Directory from '@ascend-media/package-directory/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';

const PaginationPageNumberInput = () => import(/* webpackChunkName: "minexpo-pagination-page-number-input" */ './pagination-page-number-input.vue');

export default (Browser) => {
  Directory(Browser);
  Inquiry(Browser);
  Browser.registerComponent('PaginationPageNumberInput', PaginationPageNumberInput);
};
