<template>
  <div id="top-Shops">
    <section id="Shops" class="grey lighten-3">
      <div class="py-5"></div>
      <v-container class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">Shops</h2>
        <Divider />
      </v-container>
      <div class="service">
        <img :src="seaGril" alt="">
      </div>
      <div class="service-color d-flex justify-end align-center">
        <a :href="service1" target="_blank">
        <div class="title-card">
          <div class="title-in-card">
            {{ titleCard.title }}
          </div>
          <div class="subtitle-in-card">
            {{ titleCard.subtitle }}
          </div>
        </div>
        </a>
      </div>

      <div class="py-5"></div>
    </section>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import seaGril from '@/assets/seaGirl.png'
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
    const titleCard = {
      'title': 'サービス名',
      'subtitle': '南條なぎがお届けする様々なWeb画をお買い求め頂けます。'
    }
    const service1 = new URL("https://spontaneous-macaron-b00c3e.netlify.app/").href
    return { dessertsPic, dessertsSns, headersPic, headersSns,seaGril, titleCard, service1 }
  },
})
</script>
<style scoped>
.haikei {
  background: rgba(240, 192, 5, 0.25);
}
.service{
  width: 100%;
  height: 20vh;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(245,233,222) 90%);
  position: relative;
}

.service >>> img{
  object-fit: cover;
  width: 50%;
  height: 20vh;
  position: relative;
  z-index: 1;
}
.service-color{
  width: 100%;
  height: 20vh;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(245,233,222) 90%);
  margin-top: -20vh;
  position: relative;
  z-index: 3;
}
.service-color >>> a{
  text-decoration: none;
  color: black;
}
.service-color >>> a:hover{
  text-decoration:underline;
  transition-duration: 300ms;
}

.title-card{
  background: rgba(217, 217, 217, 0.2);
  width: 50vw;
  height: 50%;
}
.title-card:hover{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;
}
.title-in-card{
  font-size: 1.5rem;
  padding-left: 20px;
  padding-top: 10px;
}
.subtitle-in-card{
  font-size: 0.95rem;
  padding-left: 20px;
  padding-bottom: 10px;
}
</style>
