<template>
    <nav class="navbar navbar-light bg-light" id="navbar">
        <a class="navbar-brand" href="#!">Navbar</a>
        <router-link class="nav-link active" href="#!">Active</router-link>
        <router-link class="nav-link" href="#!">Link</router-link>
        <router-link class="nav-link disabled" href="#!">Disabled</router-link>
    </nav>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
</style>
