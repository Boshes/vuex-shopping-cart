<template>
  <div>
      <h1>Product List</h1>
      <h3 v-if='loading'>
        Loading
      </h3>
      <ul v-else>
        <li v-for='product in products'>
          {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }} Units
          <button
            :disabled='!productIsInStock(product)'
            @click='addProductToCart(product)'
           >
           Add to cart
         </button>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    ...mapState ('products', {
      products: state => state.items
    }),

    ...mapGetters ('products', {
      productIsInStock: 'productIsInStock'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    })
  },

  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>

<style lang="css">
</style>
