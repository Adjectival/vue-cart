<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav-bar>
    </nav-bar>
    <router-view>
    </router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data () {
      return {}
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: firebrick;
  margin-top: 60px;
}
</style>
