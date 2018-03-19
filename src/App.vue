<template>
  <div id="app">
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
  margin-top: 10px;
  background: linear-gradient(to top, pink, snow);
  height: 100vh;
}
</style>
