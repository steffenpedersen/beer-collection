const state = {
    beers: [
        {
            id: 1,
            title: 'Beer One'
        },
        {
            id: 2,
            title: 'Beer Two'
        }
    ]
};

const getters = {
    allBeers: state => state.beers
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}