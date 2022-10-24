<template>
    <div class="example">
        <button @click="open">{{btnText}}</button>
        <ul v-if="isOpen">
            <li v-for="item in items"
                :key="item"
                v-html="item"
            ></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class Example extends Vue {
        @Prop() items!: [];

        isOpen: boolean = false

        get btnText(): string {
            return this.isOpen
                ? 'Закрыть'
                : 'Открыть';
        }

        open() {
            this.isOpen = !this.isOpen;
        }
    }
</script>

<style scoped>
.example {
    background: #000;
}
</style>