<template>
  <header>
    <v-app-bar app color="white" height="70" shrink-on-scroll>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="my-auto"
      ></v-app-bar-nav-icon>

      <v-avatar class="mr-3" color="grey lighten-5 my-auto" size="60">
        <!-- <v-img contain max-height="90%" src="@/assets/icon.png"></v-img> -->
        <img src="@/assets/icon.png" alt="" />
      </v-avatar>

      <v-toolbar-title style="font-weight: bold" class="my-auto">
        {{ TITLE }}
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.scroll"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { TITLE } from '@/locale/const'
export default defineComponent({
  setup() {
    const items = ref([
      { title: 'Home', icon: 'mdi-view-dashboard', scroll: '/#hero' },
      { title: 'Shops', icon: 'mdi-cart-outline', scroll: '#Shops' },
      { title: 'About me', icon: 'mdi-image', scroll: '#about-me' },
      // {
      //   title: 'Caution',
      //   icon: 'mdi-alert-circle',
      //   scroll: '#description',
      // },
      // { title: 'Order flow', icon: 'mdi-human-greeting-proximity', scroll: '#procedure'},
      // { title: 'Order', icon: 'mdi-cart', scroll: '#contact'},
    ])
    const right = ref(null)
    const drawer = ref(false)
    // const scroll = () => {
    //   cancelScroll = this.$scrollTo(element, duration, options)
    // }
    return { items, right, drawer, TITLE }
  },
})
</script>
