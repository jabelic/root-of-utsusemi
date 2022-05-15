<template>
  <div>
    <v-card class="py-12 px-4" color="grey lighten-5" flat>
      <v-theme-provider dark>
        <div>
          <v-avatar color="primary" size="88">
            <v-icon large v-text="icon"></v-icon>
          </v-avatar>
        </div>
      </v-theme-provider>
      <!-- v-text="'SNS icon'" -->
      <v-card-title class="justify-center font-weight-black text-uppercase">
        {{ title }}
      </v-card-title>

      <div class="haikei">
        <!-- v-text="'使用許諾：5000円〜\n著作権譲渡：12000円〜'" -->
        <!-- <v-card-text
                  style="
                    white-space: pre-wrap;
                    font-size: 17px;
                    font-weight: 600;
                  "
                >
                </v-card-text> -->
        <div>商品誘導説明</div>
      </div>
      <!-- <v-data-table
                :headers="headersSns"
                :items="dessertsSns"
                hide-default-header
                hide-default-footer
                class="elevation-1"
              ></v-data-table> -->
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    icon: { type: String },
    title: { type: String },
    description: { type: String },
  },
  setup() {},
})
</script>
<style scoped>
.haikei {
  background: rgba(240, 192, 5, 0.25);
}
</style>
