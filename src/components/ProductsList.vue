<template>
  <div>
      <h1>Product List</h1> {{loading}}
      <h3 v-if='loading'>
        Loading
      </h3>
      <ul v-else>
        <li v-for='product in products'>{{product.title}} {{product.price}} - {{product.inventory}}</li>
      </ul>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    this.loading = true
    console.log(this.loading)
    store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>

<style lang="css">
</style>
