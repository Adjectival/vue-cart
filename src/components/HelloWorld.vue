<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <h2 class="bg-info">Essential Links</h2>
    <ul class="card p-1 m-3">
      <li><i class="fas fa-book"></i>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li><i class="fas fa-heart"></i>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li><i class="fab fa-github"></i>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li><i class="fab fa-twitter"></i>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li><i class="fas fa-boxes"></i>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2 class="bg-info">Ecosystem</h2>
    <ul class="card p-1 m-3">
      <li><i class="fas fa-cog"></i>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li><i class="fas fa-cog"></i>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li><i class="fas fa-cog"></i>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li><i class="fas fa-cog"></i>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Enjoy Vue.js',
      msg2: 'Bootstrap4 and FontAwesome5 are gtg!',

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h2 {
  color: #2e120b;
}
a {
  color: #d62291;
}
.card {
  background: linear-gradient(to top, gainsboro, snow);
}

</style>
