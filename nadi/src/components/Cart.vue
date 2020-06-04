<template>
  <div class="cart">
    <Nav />
    <h1>{{globalStore.userName}}'s Cart</h1>
    

    <ul class="shoppingCart" v-if="shoppingCart">
        <li v-for="(cart, index) in shoppingCart" v-bind:key="index">
            {{index}}&nbsp;{{cart.name}}&nbsp;{{cart.price}}
            <button @click="removeFromCart2(index)">remove from cart</button>
            </li>
    </ul>
    <br>
    cart total: {{globalStore.cart}}
    <br>
    <button @click="completeCheckout(1)">complete checkout</button>
  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Container from '../components/Container.vue'
export default {
  name: 'cart',
  components: {
    Nav,
    Container
  },
  computed: {
    globalStore () {
      return this.$store.state
    },
    shoppingCart () {
      return this.$store.state.shoppingCartItems
    }
  },
  data () {
    return {
      message: 'cart'
    }
  },
  methods: {
    completeCheckout (index) {
      this.$store.commit('completeCheckout', { index })
    },
    removeFromCart2 (index) {
      this.$store.commit('removeFromCart2', { index })
      this.$store.commit('unreserveFamilyMeal', { index })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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

a {
  color: black;
}


.shoppingCart li{
    display: block;
    padding: 10px;
    border-bottom: 1px solid #aaa;

}


</style>



