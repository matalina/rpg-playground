import Vue from 'vue';
import Map from './components/OverviewMap.vue';

Vue.use('map', Map);

let app = new Vue({
    el: '#app',
});
