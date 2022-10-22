import initVue from "./init-vue";
import Example from "./components/Example.vue";
import "../css/styles.less"

window.onload = () => {
    initVue(document.querySelector('.vue-example'), Example);
}