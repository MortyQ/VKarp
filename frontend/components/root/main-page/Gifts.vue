<template>
  <v-card
    style="max-width: 215px; min-width: 160px; width: 100%"
    class="mt-5 pa-2"
  >
    <v-card-title>
      <span>Подарки <span class="vk_user-info_statistic">3432</span> </span>
    </v-card-title>
    <v-row cols="12" class="mt-3 pa-5">
      <v-col cols="6" md="6" v-for="item in 2" :key="item.id">
        <v-img height="100%" width="100%" src="/gift.jpeg"> </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
