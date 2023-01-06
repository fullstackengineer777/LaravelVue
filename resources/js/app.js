require('./bootstrap');

import { createApp } from 'vue';
import HelloVue from './components/HelloVue.vue';

createApp({
    components: {
        HelloVue,
    }
}).mount('#app');