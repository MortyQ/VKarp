<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <nuxt-link to="/login" class="footer_text">ВКонтакте</nuxt-link>
        <span class="footer_year-text"
          >© 2006–{{ new Date().getFullYear() }}</span
        >
      </v-col>
      <v-col cols="4">
        <nuxt-link to="/login" class="ml-3 footer_text">О ВКонтакте</nuxt-link>
        <nuxt-link to="/login" class="ml-3 footer_text">Правила</nuxt-link>
        <nuxt-link to="/login" class="ml-3 footer_text"
          >Разработчикам</nuxt-link
        >
      </v-col>
      <v-col cols="4">
        <nuxt-link to="/login" class="ml-3 footer_text">Українська</nuxt-link>
        <nuxt-link to="/login" class="ml-3 footer_text">English</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>
