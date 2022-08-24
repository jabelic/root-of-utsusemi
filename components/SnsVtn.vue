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
    <img v-if="keyStr==='Pixiv'" :src="pixiv" alt="" class="icon-img">
    <img v-else-if="keyStr==='Twitter'" :src="twitter" alt="" class="icon-img">
    <img v-else :src="skima" alt="" class="icon-img">
      <span class="grey--text text--darken-1 font-weight-bold">
        {{ keyStr }}
      </span>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { snsLinks } from '../locale/links'
import twitter from '@/assets/twitter.svg'
import pixiv from '@/assets/pixiv-logos.svg'
import skima from '@/assets/skima-logo.svg'
import { SnsKind } from '~/types/custom'

export default defineComponent({
  name: 'SnsVtn',
  props: {
    keyStr: { type: String as PropType<SnsKind>, required: true },
  },
  setup() {
    return { snsLinks, twitter, pixiv, skima }
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
.icon-img{
  height: 1rem;
  width: 1rem;
}
</style>
