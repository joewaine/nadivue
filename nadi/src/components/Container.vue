<template>
    <div>
        <div class="container">
            <Carousel />
        </div>
    </div>
</template>

<script>

import Carousel from '../components/Carousel.vue'

export default {
  components: {
    Carousel
  }
}
</script>

<style>

.container {
    background: white;
    width: 70%;
    padding-top: 20px;
    padding-bottom: 100px;
    margin: 0 auto;
}
</style>