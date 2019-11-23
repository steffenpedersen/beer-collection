import Beers from './components/Beers.vue'
import SingleBeer from './components/SingleBeer.vue'

// Define the different paths
export default [
    { path: '/', component: Beers },
    { path: '/beer/:id', component: SingleBeer }
]
