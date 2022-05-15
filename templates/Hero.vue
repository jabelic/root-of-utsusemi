<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :src="require(`@/assets/hero.png`)"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="gray--text mx-auto" justify="center">
              <v-col
                class="white--text text-center text--lighten-5"
                cols="12"
                tag="h1"
              >
                <p class="title-background">
                  <span style="font-weight: bold" class="text">
                    {{ SUB_TITLE }}
                  </span>
                  <br />

                  <span class="text" style="font-weight: bold; font-size: 70px">
                    {{ TITLE }}
                  </span>
                </p>
              </v-col>
              <v-col>
                <div class="d-flex justify-center">
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#Concepts')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { TITLE, SUB_TITLE } from '@/locale/const'
export default defineComponent({
  setup() {
    return { TITLE, SUB_TITLE }
  },
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP');
.text {
  /* Google fontsで導入したいfontsからfont-familyを取ってくる */
  font-family: 'Noto Serif JP', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.title-background {
  background: rgba(100, 100, 230, 0.5);
}
</style>
