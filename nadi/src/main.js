// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    count: 0,
    names: [],
    shoppingCartItems: [],
    cart: 0,
    userName: 'joe',
    inventory: {
      offerings: [
        {
          visible: true,
          title: 'Family Meal Calendar',
          category: 'familymeal',
          slideNo: 1,
          items: [
            {
              name: 'monday family meal',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/1.jpg',
              price: 20.00,
              today: true,
              description: '',
              availableFamilyMeals: [
                { timeslot: '4:30', amountRemaining: 0, reserved: false },
                { timeslot: '5:00', amountRemaining: 20, reserved: false },
                { timeslot: '5:30', amountRemaining: 20, reserved: false },
                { timeslot: '6:00', amountRemaining: 20, reserved: false },
                { timeslot: '6:30', amountRemaining: 20, reserved: false },
                { timeslot: '7:00', amountRemaining: 20, reserved: false }
              ]
            },
            {
              name: 'tuesday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/2.jpg',
              price: 20.00,
              today: false

            },
            {
              name: 'wednesday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/3.jpg',
              price: 20.00,
              today: false
            },
            {
              name: 'thursday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/4.jpg',
              price: 20.00,
              today: false
            }
          ]
        },
        {
          visible: false,
          title: 'A La Carte',
          category: 'alacarte',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: false,
          title: 'Bar Pickup',
          category: 'barpickup',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: false,
          title: 'Pantry',
          category: 'pantry',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: false,
          title: 'Merch',
          category: 'merch',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        }
      ]
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    increment2 (state, { name }) {
      if (name in state) {
        state[name]++
      } else {
        state[name] = 1
      }
      console.clear()
      console.log(state)
    },
    addtocart (state, { price }) {
      state.cart = state.cart + price
      state.shoppingCartItems.push({name: 'family meal', price: price})
      console.log('add 20 to cart')
    },
    removeFromCart (state, { price }) {
      state.cart = state.cart - 20
      state.shoppingCartItems.pop()
      console.log('removed 20 from cart')
    },
    removeFromCart2 (state, { index }) {
      console.log(index)
      state.inventory.offerings[0].items[0].availableFamilyMeals[index].reserved = false
      state.cart = state.cart - 20
      state.shoppingCartItems.pop()
      console.log('unreserved and removed within the cart')
    },
    reserveFamilyMeal (state, { index }) {
      state.inventory.offerings[0].items[0].availableFamilyMeals[index].reserved = true
      console.log('reserved family meal ' + index)
    },
    unreserveFamilyMeal (state, { index }) {
      state.inventory.offerings[0].items[0].availableFamilyMeals[index].reserved = false
    },
    completeCheckout (state, { index }) {
      state.inventory.offerings[0].items[0].availableFamilyMeals[index].amountRemaining--
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
