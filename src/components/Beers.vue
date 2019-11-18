<template>
  <div>
      <h3>Beers</h3>
        <div v-for="beer in allBeers" :key="beer.id">
            {{ beer.title }}
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Beers',
    methods: {
        ...mapActions(['getBeers'])
    },
    computed: mapGetters(['allBeers']),
    created() {
        this.getBeers();
    }
}
</script>

<style>

</style>