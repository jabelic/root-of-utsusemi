<template>
  <div id="top-Shops">
    <section id="Shops" class="grey lighten-3">
      <div class="py-5"></div>

      <v-container class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">Shops</h2>
        <Divider />
        <v-row>
          <v-col cols="12" md="6">
            <ShopsCard
              title="完成版販売"
              description="商品誘導説明"
              icon="mdi-account-box-outline"
          /></v-col>
          <v-col cols="12" md="6">
            <ShopsCard
              title="コンポーネント販売"
              description="商品誘導説明"
              icon="mdi-account-box-outline"
          /></v-col>
        </v-row>
      </v-container>

      <div class="py-5"></div>
    </section>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
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
