<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg" alt="" class="img" />
        <div>Centrum wsparcia dla firm</div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus">
@import '../style/style/main.styl';
</style>

// chcemy żeby te style były tylko dla tego komponentu "scoped"
<style lang="stylus" scoped>
.header{
    .img {
        width: 64px;
        height:64px;
    }
}
</style>