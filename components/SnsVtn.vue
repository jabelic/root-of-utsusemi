<template>
  <div class="my-3">
    <v-btn
      color="grey"
      :href="snsLinks[keyStr]"
      outlined
      large
      target="_blank"
      class="none-text-trans hov"
    >
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
<style scoped>
.none-text-trans {
  text-transform: none !important;
}
.hov:hover {
  background-color: rgba(100, 100, 230, 0.3);
}
</style>
