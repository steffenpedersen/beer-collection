<template>
  <div>
      <h3>Beers</h3>
        <div v-for="beer in allBeers" :key="beer.id">
            {{ beer.title }}
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Beers',
    computed: mapGetters(['allBeers'])
}
</script>

<style>

</style>