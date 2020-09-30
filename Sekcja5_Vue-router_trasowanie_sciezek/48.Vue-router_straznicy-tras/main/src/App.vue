<template>
  <div id="app">
    <h1>Witaj w vue</h1>
    <ul>
      <li>
        <!-- tag="li"  ten atrybut zamieni domyślny znacznik router-link(<a>) na tag li-->
        <!-- @click.native="test" nasłuchiwanie darzenia klik i wywołanie metody test -->
        <router-link to="/" tag="li" @click.native="test"
          >Strona glowna</router-link
        >
      </li>
      <li>
        <router-link to="/about">Strona o nas</router-link>
      </li>
      <li>
        <!-- każde kliknięcie na strona kontact przeniesie nas do strony o nas -->
        <router-link to="/contact" @click.native="about"
          >Strona kontakt</router-link
        >
      </li>
    </ul>
    <!-- komponet bedzie wyświetlał nam widoki(ich nazwy) do których przechodzimy -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    test() {
      alert("alert z metody test");
    },
    about() {
      this.$router.push("/about"); //każde kliknięcie na strona kontact przeniesie nas do strony o nas
      //this.$router.replace('/about');//podobnie działa metoda replace, ale nie da się kliknąć potem wstecz w przeglądarce
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
