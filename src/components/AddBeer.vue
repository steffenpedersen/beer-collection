<template>
  <section class="add-beer">
    <!-- Use @submit to handle form submission -->
    <form @submit="onSubmit">
      <!-- Create two-way binding on form input with name (DOM to JS) -->
      <input type="text" v-model="name" placeholder="Add beer" />
      <input type="submit" value="Submit" />
    </form>
  </section>
</template>

<script>
// Vuex helper to dispatch an action
import { mapActions } from "vuex";

export default {
  name: "AddBeer",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    // Use spread operation on helper
    // to get addBeer action function
    ...mapActions(["addBeer"]),
    onSubmit(event) {
      // Don't submit the form
      event.preventDefault();
      // Use Vuex action to add beer
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
  color: var(--color-grey);
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
