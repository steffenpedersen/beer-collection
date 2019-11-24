<template>
  <section class="single-beer">
    <div>
      <!-- Use v-if directive to conditionally render image -->
      <!-- Use interpolation to get information from beer -->
      <img v-if="beer.labels" :src="beer.labels.large" alt />
    </div>
    <div>
      <time>{{ beer.createDate }}</time>
      <h2>{{ beer.name }}</h2>
      <p v-if="beer.description">{{ beer.description }}</p>
      <!-- Use router-link component to go back to root -->
      <router-link to="/" class="go-back">Back</router-link>
    </div>
  </section>
</template>

<script>
// Vuex helper to dispatch an action
import { mapActions } from "vuex";

export default {
  name: "SingleBeer",
  methods: {
    // Use spread operation on helper
    // to get addBeer action function
    ...mapActions(["getBeers"])
  },
  computed: {
    // Logic for our template to find the exact beer
    beer() {
      return this.$store.state.beers.beers.find(
        beer => beer.id == this.$route.params.id
      );
    }
  },
  // Life cycle hook to run code
  // after an instance is created
  created() {
    this.getBeers();
  }
};
</script>

<style>
.single-beer {
  display: grid;
  column-gap: 2em;
  row-gap: 2em;
  grid-template-columns: 1fr 1fr;
}

img {
  width: 100%;
  height: auto;
}

.go-back {
  background-color: var(--color-yellow);
  border: none;
  color: var(--color-white);
  padding: 0.5em 1em;
  border-radius: 1em;
  width: 100%;
  font-size: 0.8em;
  cursor: pointer;
}
</style>
