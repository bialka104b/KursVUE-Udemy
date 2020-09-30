<template>
  <div id="app">
    <h1>Witaj w vue.js</h1>
    <hello class="color"></hello><!-- Dodajemy komponent hello z pliku Hello.vue  do naszej aplikacji  -->
  </div>
</template>

<script>

import Hello from "./components/Hello.vue";//import pliku Hello.vue 
export default {
  name: 'App',
  components: {
    Hello //dodajemy nasz zaimportowany komponent Hello
  }
}
</script>

<style>
/* tutaj dodajemy style do naszej strony */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  color:greenyellow;
}
</style>
