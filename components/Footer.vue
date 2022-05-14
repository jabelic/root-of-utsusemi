<template>
  <div id="footer">
    <v-footer class="justify-center" color="#292929" height="50">
      <div
        class="subtitle-2 font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} - jabelic
      </div>
    </v-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
<style scoped></style>
