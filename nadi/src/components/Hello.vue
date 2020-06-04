<template>
  <div class="hello">
    <Nav />
    <Container />
  </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Container from '../components/Container.vue'
export default {
  name: 'hello',
  components: {
    Nav,
    Container
  },
  data () {
    return {
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



