<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <nuxt-link
          to="/login"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >VK</nuxt-link
        >
        <span style="font-size: 14px; color: #6f7985"> © 2006–2021</span>
      </v-col>
      <v-col cols="4">
        <nuxt-link
          to="/login"
          class="ml-3"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >{{ $t('footerAbout') }}</nuxt-link
        >
        <nuxt-link
          to="/login"
          class="ml-3"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >{{ $t('footerTerms') }}</nuxt-link
        >
        <nuxt-link
          to="/login"
          class="ml-3"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >{{ $t('footerDev') }}</nuxt-link
        >
      </v-col>
      <v-col cols="4">
        <nuxt-link
          :to="switchLocalePath('ua')"
          class="ml-3"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >Українська</nuxt-link
        >
        <nuxt-link
          :to="switchLocalePath('en')"
          class="ml-3"
          style="text-decoration: none; color: #2a5885; font-size: 14px"
          >English</nuxt-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>
