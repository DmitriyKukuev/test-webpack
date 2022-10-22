import Vue, {Component} from 'vue';

export default function initVue(vueEl: HTMLElement | null | undefined, component: Component): void {
    if (!vueEl) return;

    const props = JSON.parse(vueEl.dataset.vue || '{}');

    new Vue({
        el: vueEl,
        render: h => h(component, {props}),
    });
}