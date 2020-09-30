<template>
  <div>
    <h1>Wartość licznika to: {{ counter }}</h1>
    <button @click="adds">Dodaj 1</button>
    <button @click="subtract">odejmij 1</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed: {
    //wlasciwosci obliczane
    counter: () => {
       return store.getters.downloadCounter;
    }
  },
  methods: {
    adds: () => {
      return store.dispatch("increaseCounter");
    },
    subtract: () => {
      return store.dispatch("decreaseCounter");
    }
  }
};
</script>
