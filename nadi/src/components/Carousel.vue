<template>
    <div>
      <div v-for="offering in offerings" v-bind:key="offering.title">
        <div v-if="offering.visible" class="carousel">
        {{offering.title}}
        <carousel :items="offering.slideNo ? offering.slideNo : 3">
          <div v-for="item in offering.items" v-bind:key="item.name">
            {{count}}
            {{item.name}}
            <img v-bind:src="item.img" />


            <!-- <button @click="increment()">+</button>
            <button v-if="count > 0" @click="decrement()">-</button> -->
            <!-- <button class="has-dropdown" @click="toggle">like</button>
            <button @click="increment2(offering.category)">creatname</button>
            <button @click="addtocart(item.price)">add to cart</button>
            <button @click="removeFromCart(item.price)">remove from cart</button> -->

            <div v-if="item.today" class="order-panel">
          <template v-if="item.availableFamilyMeals">
          <br>
                <button class="order-button" v-bind:class="{ reserved: meal.reserved === true, 'not-available': meal.amountRemaining === 0 }" @click="confirmOrder(index, item.price)" v-for="(meal, index) in item.availableFamilyMeals" v-bind:key="meal.timeslot">
                    {{meal.timeslot}} ({{meal.amountRemaining}})
                  </button>
        </template>
              </div>
          </div>
        </carousel>  

        </div>

      </div>
    </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
  computed: {
    count () {
      return this.$store.state.count
    },
    names () {
      return this.$store.state.names
    },
    cart () {
      return this.$store.state.cart
    }
  },
  data () {
    return this.$store.state.inventory
  },
  methods: {
    toggle: function (event) {
      if (event.target.classList.contains('is-open')) {
        this.$store.commit('decrement')
        event.target.classList.remove('is-open')
      } else {
        event.target.classList.add('is-open')
        this.$store.commit('increment')
      }
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    increment2 (name) {
      this.$store.commit('increment2', { name })
    },
    addtocart (price) {
      this.$store.commit('addtocart', { price })
    },
    removeFromCart (price) {
      this.$store.commit('removeFromCart', { price })
    },
    confirmOrder (index, price) {
      // confirm('are you sure you want to order this?')
      if (event.target.classList.contains('reserved')) {
        event.target.classList.remove('reserved')
        this.$store.commit('unreserveFamilyMeal', { index })
        this.$store.commit('removeFromCart', { price })
      } else {
        event.target.classList.add('reserved')
        this.$store.commit('reserveFamilyMeal', { index })
        this.$store.commit('addtocart', { price })
      }
    }
  }
}
</script>


<style>
.carousel{
  margin-bottom: 100px;
}

.reserved{
  background: red;
}

.not-available{
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}


.order-button{
  width: 33.33%;
  padding: 20px 0;
}
</style>