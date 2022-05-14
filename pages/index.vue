<template>
  <div>
    <Hero />
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
<style scoped></style>
