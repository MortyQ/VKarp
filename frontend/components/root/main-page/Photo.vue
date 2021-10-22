<template>
  <v-card tile class="pa-2" style="max-width: 300px">
    <v-img
      height="400px"
      width="100%"
      lazy-src="/default-image.jpeg"
      src="/default-image.jpeg"
    >
    </v-img>
    <div class="ranks mt-2 mb-2">833943</div>
    <v-row cols="12" class="d-flex justify-space-between align-center">
      <v-col cols="12" lg="8">
        <v-btn height="35px" max-width="100%" depressed color="#a9d1ff">
          <span style="font-size: 12px !important"> Редактировать </span>
        </v-btn>
      </v-col>
      <v-col cols="12" lg="4">
        <v-btn
          width="100%"
          max-width="40px"
          min-width="40px"
          height="35px"
          depressed
          color="#a9d1ff"
        >
          <v-icon color="#6488b1" small> mdi-chart-bar </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Photo extends Vue {}
</script>
