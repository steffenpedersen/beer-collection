import axios from 'axios';

const state = {
    beers: []
};

const getters = {
    allBeers: state => state.beers
};

const actions = {
    async getBeers({ commit }) {
        const response = await axios.get('http://localhost:8080/v2/beers/', {
            params: {
                key: `${process.env.VUE_APP_API_KEY}`
              }          
        });

        commit('setBeers', response.data.data)
    }
};

const mutations = {
    setBeers: (state, beers) => (state.beers = beers)
};

export default {
    state,
    getters,
    actions,
    mutations
}