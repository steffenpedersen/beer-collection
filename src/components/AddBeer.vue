<template>
  <section class="add-beer">
    <form @submit="onSubmit">
      <input type="text" v-model="name" placeholder="Add beer" />
      <input type="submit" value="Submit" />
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddBeer",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["addBeer"]),
    onSubmit(e) {
      e.preventDefault();
      this.addBeer(this.name);
    }
  }
};
</script>

<style>
.add-beer {
  margin-bottom: 4em;
}

input[type="text"] {
  background: transparent;
  border: none;
  font-size: 0.8em;
  color: darkgray;
  padding: 1em;
  border-bottom: 1px solid rgba(177, 177, 177, 0.2);
  margin-right: 1em;
}

input:focus {
  outline: none;
}

input[type="submit"] {
  background-color: var(--color-yellow);
  border: none;
  color: var(--color-white);
  padding: 0.5em 1em;
  border-radius: 0.8em;
  font-size: 0.8em;
  cursor: pointer;
}
</style>
