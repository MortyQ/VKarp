<template>
  <v-app>
    <v-app-bar app color="white" tile flat> <AppBar /> </v-app-bar>
    <v-main style="background: #f0ebe9">
      <nuxt />
    </v-main>
    <v-footer style="background: #f0ebe9" app> <Footer /></v-footer>
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
