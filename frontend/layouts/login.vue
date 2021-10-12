<template>
  <v-app>
    <v-app-bar app> <AppBar /> </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app> <Footer /></v-footer>
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
