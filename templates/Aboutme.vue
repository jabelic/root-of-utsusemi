<template>
  <section id="about-me">
    <div class="py-6"></div>

    <v-container class="text-center">
      <h2 class="display-1 font-weight-bold mb-3">Artist</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider class="mb-1"></v-divider>
      </v-responsive>

      <div class="mx-auto subtitle font-weight-light mb-8">
        {{ ABOUTUS }}
      </div>

      <v-avatar class="elevation-12 mb-12" size="128">
        <img src="@/assets/icon.png" />
      </v-avatar>

      <v-responsive
        style="font-size: 30px"
        class="mx-auto font-weight-light mb-6"
        max-width="360"
        >{{ ARTIST }}</v-responsive
      >
      <SnsVtn :keyStr="'Pixiv'" />
      <SnsVtn :keyStr="'Twitter'" />
      <SnsVtn :keyStr="'SKIMA'" />
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ABOUTUS, ARTIST } from '../locale/const'
import { snsLinks } from '../locale/links'
import SnsVtn from '../components/SnsVtn.vue'

export default defineComponent({
  name: 'Aboutme',
  setup() {
    return { snsLinks, ARTIST, ABOUTUS }
  },
  components: { SnsVtn },
})
</script>
