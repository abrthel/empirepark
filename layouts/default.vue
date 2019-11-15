<template>
  <div class="bg-gray-100 font-body">
    <MainHeader />

    <nuxt />

    <footer>

    </footer>
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>

<script>
import MainHeader from '~/components/MainHeader.vue'

export default {
  components: {
    MainHeader
  },
}
</script>
