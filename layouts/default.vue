<template>
  <v-app dark>
    <Appbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {},
})
</script>
