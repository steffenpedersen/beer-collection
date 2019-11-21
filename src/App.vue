<template>
  <div id="app">
    <h1>Beer Collection</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Beers from "./components/Beers.vue";

export default {
  name: "app",
  components: {
    Beers
  }
};
</script>

<style>
:root {
  --color-dark: #313131;
  --color-grey: #b1b1b1;
  --color-light: #f9f9f9;
  --color-yellow: #ffb343;
  --color-white: #ffffff;
}

body {
  background-color: var(--color-light);
  color: var(--color-dark);
  font-family: sans-serif;
}

#app {
  margin: 1em 2em;
}

@media (min-width: 600px) {
  #app {
    margin: 2em 4em;
  }
}

@media (min-width: 900px) {
  #app {
    margin: 2em 6em;
  }
}
</style>
