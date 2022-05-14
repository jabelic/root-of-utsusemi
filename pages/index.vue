<template>
  <div>
    <Hero />
    <Menu />
    <Aboutme />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Menu from '~/templates/Menu.vue'

export default defineComponent({
  setup() {},
  components: { Menu },
})
</script>
<style scoped></style>
