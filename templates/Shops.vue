<template>
  <div id="top-Shops">
    <section id="Shops" class="grey lighten-3">
      <div class="py-5"></div>

      <v-container class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">Shops</h2>

        <v-responsive class="mx-auto mb-12" width="46">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="'mdi-account-box-outline'"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <!-- v-text="'SNS icon'" -->
              <v-card-title
                class="justify-center font-weight-black text-uppercase"
              >
                完成版販売
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
                <div>説明</div>
              </div>
              <!-- <v-data-table
                :headers="headersSns"
                :items="dessertsSns"
                hide-default-header
                hide-default-footer
                class="elevation-1"
              ></v-data-table> -->
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon
                      large
                      v-text="'mdi-picture-in-picture-bottom-right'"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <!-- v-text="'一枚絵'" -->
              <v-card-title
                class="justify-center font-weight-black text-uppercase"
              >
                コンポーネント販売
              </v-card-title>
              <div class="haikei">
                <!-- v-text="'使用許諾：7000円〜\n著作権譲渡：17000円〜'" -->
                <!-- <v-card-text
                  style="
                    white-space: pre-wrap;
                    font-size: 17px;
                    font-weight: 600;
                  "
                >
                </v-card-text> -->
                <div>説明</div>
              </div>
              <!-- <v-data-table
                :headers="headersPic"
                :items="dessertsPic"
                hide-default-header
                hide-default-footer
                class="elevation-1"
              ></v-data-table> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-5"></div>
    </section>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Shops',
  setup() {
    const headersSns = reactive([
      {
        text: '',
        align: 'start',
        value: 'name',
      },
      { text: 'Data', value: 'data' },
    ])
    const dessertsSns = reactive([
      {
        name: 'サイズ',
        data: '2500x2500px(指定がなければ)',
      },
      {
        name: '形式',
        data: 'png, jpg',
      },
      {
        name: '人物',
        data: '1人(胸上まで)',
      },
      {
        name: '背景',
        data: '単色/簡易な柄/透過',
      },
      {
        name: 'オプション',
        data: '別途料金',
      },
    ])
    const headersPic = reactive([
      {
        text: '',
        align: 'start',
        value: 'name',
      },
      { text: 'Data', value: 'data' },
    ])
    const dessertsPic = reactive([
      {
        name: 'サイズ',
        data: '指定必須',
      },
      {
        name: '形式',
        data: 'png, jpg',
      },
      {
        name: '活用例',
        data: '動画用サムネイル, CDジャケット等',
      },
      {
        name: '内容',
        data: '人物1人と背景',
      },
      {
        name: 'オプション',
        data: '別途料金',
      },
    ])
    return { dessertsPic, dessertsSns, headersPic, headersSns }
  },
})
</script>
<style scoped>
.haikei {
  background: rgba(240, 192, 5, 0.25);
}
</style>
