<template>
    <div>
    <nav class="nav-style">Nadi Mama&nbsp;hello, {{name}}&nbsp;{{cart}}&nbsp;<router-link v-bind:to="'cart'">Cart</router-link>&nbsp;
    <router-link v-bind:to="'/'">Home</router-link></nav>
    </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.state.userName
    },
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>



<style>

.nav-style {
    background: #b9ebff;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
}
</style>