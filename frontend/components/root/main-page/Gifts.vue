<template>
  <v-card class="mt-5 pa-2" style="max-width: 300px">
    <v-card-title>
      <span>Подарки <span style="color: #aaaaaa">3432</span> </span>
    </v-card-title>
    <v-row cols="12" class="mt-3 pa-5">
      <v-col cols="3" v-for="item in 3" :key="item.id">
        <v-img height="100%" width="100%" src="/gift.jpeg"> </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
