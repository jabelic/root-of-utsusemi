<template>
  <section id="about-me" class="mt-10">
    <v-container class="text-center">
      <h2 class="display-1 font-weight-bold mb-3">Artist</h2>
      <Divider />
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
      <div class="d-flex justify-center">
        <span v-for="item in SNS">
          <SnsVtn :keyStr="item" class="ma-3" />
        </span>
      </div>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ABOUTUS, ARTIST } from '../locale/const'
import { snsLinks } from '../locale/links'
import SnsVtn from '../components/SnsVtn.vue'
import { SnsKind } from '~/types/custom'

export default defineComponent({
  name: 'Aboutme',
  setup() {
    const SNS: SnsKind[] = ['Pixiv','Twitter', 'SKIMA']
    return { snsLinks, ARTIST, ABOUTUS, SNS }
  },
  components: { SnsVtn },
})
</script>
