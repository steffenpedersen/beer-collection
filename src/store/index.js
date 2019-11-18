import Vuex from 'vuex';
import Vue from 'vue';
import beers from './modules/beers';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        beers
    }
});