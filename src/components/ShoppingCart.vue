<template lang="html">
  <div>
     <h1>Shopping Cart</h1>
     <ul>
       <li v-for='product in products'>
         {{ product.title }}: {{ product.price | currency }} - {{ product.quantity }} Units
       </li>
     </ul>
     <p>Total: {{ total | currency }}</p>
     <button @click='checkout'>Checkout</button>
     <p v-if='checkoutStatus'>{{ checkoutStatus }}</p>
  </div>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: 'checkoutStatus'
    }),

    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotal'
    })
  },

  methods: {
    ...mapActions(['checkout'])
  }
}
</script>

<style lang="css">
</style>
