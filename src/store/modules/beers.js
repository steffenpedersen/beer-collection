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
      },
      async addBeer({ commit }, name) {
        // Note: BreweryDB doesn't support post
        // READ ONLY MODE: The beer has been successfully added
        // and is waiting to be approved by our administrators
        const response = {
            id: 1,
            name: name
        }

        commit('newBeer', response);
      }
};

const mutations = {
    setBeers: (state, beers) => (state.beers = beers),
    newBeer: (state, beer) => state.beers.unshift(beer)
};

export default {
    state,
    getters,
    actions,
    mutations
}