<template>
  <div id="app">
    <h1>Vuex zarządzanie stanem aplikacji</h1>
    <Licznik></Licznik>
  </div>
</template>

<script>
import Licznik from './components/Licznik';
export default {
  name: 'App',
  components: {Licznik}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
