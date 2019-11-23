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
    // Make a request for all BreweryDB beers
    axios.get('http://localhost:8080/v2/beers/', {
      // Include query parameter with API key
      params: {
        key: `${process.env.VUE_APP_API_KEY}`
      }
    })
    // When the request was succesful,
    // commit the mutation with our response data
    .then(response => {
      commit('setBeers', response.data.data)
    })
    // If something goes wrong,
    // send the error to the console
    .catch(error => {
      console.error(error.response)
    })
  },
  addBeer({ commit }, name) {
    // Note: BreweryDB doesn't support post
    // READ ONLY MODE: The beer has been successfully added
    // and is waiting to be approved by our administrators
    const response = {
      id: 1,
      name: name
    }
    // Commit the mutation with our response data
    commit('newBeer', response);
  }
};

// Mutate the state (update data)
const mutations = {
  // Set all the beers to the state
  setBeers: (state, beers) => (state.beers = beers),
  // Add new beer to the state
  newBeer: (state, beer) => state.beers.unshift(beer)
};

export default {
  state,
  getters,
  actions,
  mutations
}
