import Beers from './components/Beers.vue'
import SingleBeer from './components/SingleBeer.vue'

export default [
    { path: '/', component: Beers },
    { path: '/beer/:id', component: SingleBeer }
]
