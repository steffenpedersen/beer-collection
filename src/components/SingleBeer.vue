<template>
  <section class="single-beer">
    <div>
      <img v-if="beer.labels" :src="beer.labels.large" alt />
    </div>
    <div>
      <time>{{ beer.createDate }}</time>
      <h2>{{ beer.name }}</h2>
      <p v-if="beer.description">{{ beer.description }}</p>
      <router-link to="/" class="go-back">Back</router-link>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SingleBeer",
  methods: {
    ...mapActions(["getBeers"])
  },
  computed: {
    ...mapGetters(["allBeers"]),
    beer() {
      return this.$store.state.beers.beers.find(
        beer => beer.id == this.$route.params.id
      );
    }
  },
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
