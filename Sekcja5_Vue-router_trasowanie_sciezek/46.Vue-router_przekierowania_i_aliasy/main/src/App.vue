<template>
  <div id="app">
    <h1>Witaj w vue</h1>
    <ul>
      <li>
        <router-link to="/">Strona glowna</router-link>
      </li>
      <li>
        <router-link to="/about">Strona o nas</router-link>
      </li>
      <li>
        <router-link to="/contact">Strona kontakt</router-link>
      </li>
    </ul>
    <!-- komponet bedzie wyświetlał nam widoki(ich nazwy) do których przechodzimy -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
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
