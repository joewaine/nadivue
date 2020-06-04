<template>
  <div class="checkout">
    <Nav />
    <h1>{{message}}</h1>
    
    <!-- {{globalStore}} -->
    <br>
    name: {{globalStore.userName}}
    <br>
    cart: {{globalStore.cart}}
    <br>


  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Container from '../components/Container.vue'
export default {
  name: 'checkout',
  components: {
    Nav,
    Container
  },
  computed: {
    globalStore () {
      return this.$store.state
    }
  },
  data () {
    return {
      message: 'checkout'
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



</style>



