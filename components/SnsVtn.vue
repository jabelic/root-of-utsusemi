<template>
  <div class="my-3">
    <v-btn color="grey" :href="snsLinks[keyStr]" outlined large target="_blank">
      <span class="grey--text text--darken-1 font-weight-bold">
        {{ keyStr }}
      </span>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { snsLinks } from '../locale/links'
export default defineComponent({
  name: 'SnsVtn',
  props: {
    keyStr: { type: String, required: true },
  },
  setup(props, {}) {
    return { snsLinks }
  },
})
</script>
<style scoped></style>
