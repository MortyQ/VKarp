<template>
  <v-card
    style="max-width: 215px; min-width: 160px; width: 100%"
    class="mt-5 pa-2"
  >
    <v-card-title>
      <span>Друзья <span class="vk_user-info_statistic">87</span> </span>
    </v-card-title>
    <v-row
      cols="12"
      class="mt-3 pa-1 d-flex justify-center align-center"
      style="gap: 10px"
    >
      <v-col
        cols="6"
        class="d-flex flex-column justify-center align-center"
        md="5"
        style="gap: 2px"
        v-for="item in 4"
        :key="item.id"
      >
        <v-img
          height="100%"
          width="100%"
          lazy-src="/default-image.jpeg"
          src="/default-image.jpeg"
        >
        </v-img>
        <span>Александр</span>
      </v-col>
    </v-row>
  </v-card>
</template>
