<template>
    <nav class="navbar navbar-light bg-light" id="navbar">
        <a class="navbar-brand" href="#!">
            <img src="../assets/logo.png" class="navlogo">
            <h4>Light Item Store</h4>
        </a>
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
.navlogo {
    max-width: 80px;
    max-height: 80px;
}
</style>
