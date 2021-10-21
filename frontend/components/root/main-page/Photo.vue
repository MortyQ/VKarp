<template>
  <v-card class="pa-3">
    <v-img
      height="400px"
      width="100%"
      lazy-src="/alexboss.jpeg"
      src="/alexboss.jpeg"
    >
    </v-img>
    <div style="max-width: 70%" class="ranks mt-2 mb-2">833943</div>
    <div>
      <v-btn color="#a9d1ff" class="">
        <span style="color: #6488b1"> Редактировать </span>
      </v-btn>

      <v-btn color="#a9d1ff" class="">
        <v-icon color="#6488b1"> mdi-chart-bar </v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Photo extends Vue {}
</script>
