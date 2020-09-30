<template>
<!-- wewnątrz template definijemy to co wcześniej definiowaliśmy jako zmienna template  -->
  <p>{{message}}</p>
</template>

<script>
// wewnątrz script dodajemy obiekt name i data owijając to export default
export default {//export default oznacza że coś jest exportowane domyślnie
  data () {
    return {
      message: 'Witaj w komponencie'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  color:green!important;
}
</style>
