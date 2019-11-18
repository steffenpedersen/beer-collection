<template>
  <div>
    <h3>Add Beer</h3>

    <form @submit="onSubmit">
        <input type="text" v-model="name" placeholder="Add beer">
        <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddBeer',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    ...mapActions(['addBeer']),
    onSubmit(e) {
      e.preventDefault();
      this.addBeer(this.name);
    }
  }
};
</script>

<style>

</style>
