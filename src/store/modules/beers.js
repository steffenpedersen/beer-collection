import axios from 'axios';

// Beers module
// Each module can have its own state, getters, actions and mutations

// App-level state/data (todos, posts etc.)
const state = {
  beers: []
};

// Get pieces of state or computed values from state
const getters = {
  allBeers: state => state.beers
};

// Called from components to commit a mutation
const actions = {
  getBeers({ commit }) {
    axios.get('http://localhost:8080/v2/beers/', {
      params: {
        key: `${process.env.VUE_APP_API_KEY}`
      }
    })
    .then(response => {
      commit('setBeers', response.data.data)
    })
    .catch(error => {
      console.error(error.response)
    })
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

// Mutate the state (update data)
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
