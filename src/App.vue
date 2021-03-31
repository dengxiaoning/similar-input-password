<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/cat.png" />
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  text-align: center;
}
.logo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
