<template>
  <v-sheet id="contact" color="#333333" dark tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        <!-- Order Form -->
        問い合わせ
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-theme-provider light> </v-theme-provider>
      <v-col
        cols="12"
        md="6"
        align="center"
        class="white--text mx-auto"
        justify="center"
      >
        <!--v-btn
            color="grey"
            href="https://forms.gle/z9mYDn11mS1zo6HE9"
            outlined
            large
            class="blue"
          -->
        <v-btn color="grey" outlined large class="blue none-text-trans">
          <span
            class="white--text text--darken-9 font-weight-bold"
            style="font-size: 20px"
          >
            coming soon...
          </span>
        </v-btn>
      </v-col>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Information',
  setup() {},
})
</script>
<style scoped>
.none-text-trans {
  text-transform: none !important;
}
</style>
