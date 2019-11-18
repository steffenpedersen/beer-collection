import axios from 'axios';

const state = {
    beers: []
};

const getters = {
    allBeers: state => state.beers
};

const actions = {
    async getBeers() {
        const response = await axios.get('http://localhost:8080/v2/beers/', {
            params: {
                key: `${process.env.VUE_APP_API_KEY}`
              }          
        });

        console.log(response.data.data)
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}