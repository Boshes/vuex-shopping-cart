import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({

  //Holds default stuff and contains changing stuff
  state: {
    products: []
  },

  //gets state
  getters: {
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  // does api stuff and then calls the mutations
  actions: {
    fetchProducts ({commit}) {
      new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  // Updates states of stuff
  mutations: {
    setProducts (state, products) {
      state.products = products
    }
  }
})
