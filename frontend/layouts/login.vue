<template>
  <v-app>
    <v-app-bar app color="white" tile flat height="48px">
      <AppBar />
    </v-app-bar>
    <v-main class="background_main" app>
      <nuxt />
    </v-main>
    <v-footer class="background_main"> <Footer /></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppBar from '@/components/root/login/AppBar.vue'
import Footer from '@/components/root/login/Footer.vue'

@Component({
  components: { AppBar, Footer },
  computed: {},
})
export default class LoginLayout extends Vue {}
</script>
