<template>
  <div>
    <Hero />
    <Concepts />
    <Shops />
    <Aboutme />
    <Information />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Shops from '~/templates/Shops.vue'

export default defineComponent({
  setup() {},
  components: { Shops },
})
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');
#app {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: 'Noto Serif JP', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
