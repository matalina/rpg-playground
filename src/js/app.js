import Vue from 'vue';
import OverviewMap from './components/OverviewMap.vue';

Vue.use('overview-map', OverviewMap);

let app = new Vue({
    el: '#app',
    components: {
        'overview-map' : OverviewMap,
    }
});
