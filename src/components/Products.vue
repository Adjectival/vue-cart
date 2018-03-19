<template>
  <div class="container-fluid text-left">
      <h1>vuex Store: All Products</h1>
      <h3>Featuring {{ length }} products</h3>
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr
              v-for="product in products"
              track-by="id"
              >
                <td>{{product.name}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
                <td>
                    <button
                    @click="addToCart(product)"
                    class="btn btn-lg btn-info"
                    >
                    Add To Cart
                    </button>
                </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "app",
  computed: mapGetters({
      products: 'allProducts',
      length: 'numberOfProducts'
  }),
  methods: mapActions([
      'addToCart'
  ])
}
</script>

<style lang="scss" scoped>
</style>
