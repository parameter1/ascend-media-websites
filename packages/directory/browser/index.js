const AutoScroll = () => import(/* webpackChunkName: "directory-auto-scroll" */ './auto-scroll.vue');

export default (Browser) => {
  Browser.registerComponent('DirectoryAutoScroll', AutoScroll);
};
