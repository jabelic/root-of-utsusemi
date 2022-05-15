<template>
  <div id="Concepts">
    <section class="grey lighten-3 text">
      <v-container>
        <div class="d-flex flex-column justify-center">
          <div class="d-flex flex-row justify-center">
            <h2 class="display-1 font-weight-bold mb-3">Concepts</h2>
          </div>
          <Divider />
          <div class="d-flex flex-row justify-center">
            <div>{{ concepts }}</div>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { concepts } from '@/locale/description'
export default defineComponent({
  setup() {
    return { concepts }
  },
})
</script>
<style scoped></style>
