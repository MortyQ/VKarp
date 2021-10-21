<template>
  <v-card class="mt-5 pa-2">
    <v-card-title>
      <span>Подарки <span style="color: #aaaaaa">3432</span> </span>ß
    </v-card-title>
    <v-row cols="10" class="mt-3 pa-5">
      <v-col cols="4" v-for="item in 3" :key="item.id">
        <v-img height="100%" width="100%" src="/gift.jpeg"> </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
