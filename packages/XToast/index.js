import XToast from './src/index.vue';
XToast.install = function(Vue) {
    Vue.component(XToast.name, XToast);
};
export default XToast;