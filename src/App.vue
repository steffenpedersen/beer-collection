<template>
  <div id="app">
    <AddBeer />
    <Beers />
  </div>
</template>

<script>
import Beers from "./components/Beers.vue";
import AddBeer from "./components/AddBeer.vue";

export default {
  name: "app",
  components: {
    Beers,
    AddBeer
  }
};
</script>

<style>
</style>
