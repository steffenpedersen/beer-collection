<template>
  <section>
    <AddBeer />
    <div class="beers">
      <!-- Use v-for directive to render a list of beers -->
      <div v-for="beer in allBeers" :key="beer.id" class="card">
        <div class="card__header">
          <!-- Use interpolation to get information from beer -->
          <time class="text-grey">{{ beer.createDate }}</time>
          <h3 class="mrg-half">{{ beer.name }}</h3>
        </div>
        <div class="card__body">
          <h4 class="text-yellow mrg-half">Status</h4>
          <p class="mrg-half">{{ beer.statusDisplay }}</p>
        </div>
        <button>
          <!-- Use router-link component with v-bind directive for beer.id -->
          <router-link :to="{ path: '/beer/' + beer.id }">More info</router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// Vuex helpers to map store getters to
// computed properties and dispatch an action
import { mapGetters, mapActions } from "vuex";
import AddBeer from "./AddBeer.vue";

export default {
  name: "Beers",
  components: {
    AddBeer
  },
  methods: {
    // Use spread operation on helper
    // to get getBeers action function
    ...mapActions(["getBeers"])
  },
  // Logic for our template to find all beers
  computed: mapGetters(["allBeers"]),
  // Life cycle hook to load all
  // beers to state after instance
  // is created
  created() {
    this.getBeers();
  }
};
</script>

<style>
.beers {
  display: grid;
  column-gap: 2em;
  row-gap: 2em;
}

@media (min-width: 600px) {
  .beers {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .beers {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.text-yellow {
  color: var(--color-yellow);
  font-size: 0.8em;
  text-transform: uppercase;
}

.text-grey {
  color: var(--color-grey);
  font-size: 0.9em;
  text-transform: uppercase;
}

.card {
  background-color: var(--color-white);
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0 0.25em 1em rgba(48, 48, 48, 0.1);
}

.card__header {
  border-bottom: 1px solid rgba(177, 177, 177, 0.2);
  padding-bottom: 0.5em;
}

.card__body {
  padding-top: 0.5em;
  border-bottom: 1px solid rgba(177, 177, 177, 0.2);
  padding-bottom: 0.5em;
  margin-bottom: 1em;
}

button {
  background-color: var(--color-yellow);
  border: none;
  color: var(--color-white);
  padding: 1.5em 2em;
  border-radius: 1em;
  width: 100%;
  font-size: 0.8em;
  cursor: pointer;
}

.mrg-half {
  margin: 0.5rem 0;
}
</style>
