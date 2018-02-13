import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({

  // Uses stores from other areas and import them into this global namespace
  modules: {
    cart,
    products
  },

  // Holds default stuff and contains changing stuff
  state: {

  },

  // gets state
  getters: {

  },

  // does api stuff and then calls the mutations
  actions,

  // Updates states of stuff
  mutations: {

  }
})
