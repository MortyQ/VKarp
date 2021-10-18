<template>
  <v-card flat tile color="#f7f8fa">
    <v-card-title class="d-flex" style="gap: 5px">
      <v-img
        max-width="20px"
        style="border-radius: 5px"
        height="20px"
        width="20px"
        src="/vklogo.png"
        lazy-src="/vklogo.png"
      >
      </v-img>
      <span>ID</span>
    </v-card-title>
    <v-card-text>
      <span class="h2">
        {{ $t('titleManyServices') }}
      </span>
    </v-card-text>
    <v-row class="ml-auto mb-2" v-for="item in services" :key="item.id">
      <v-col cols="1">
        <v-icon size="30px" color="#626d7a">
          {{ item.icon }}
        </v-icon>
      </v-col>
      <v-col cols="10" class="ml-1">
        <span style="color: #626d7a">
          {{ item.text }}
        </span>
      </v-col>
    </v-row>
    <nuxt-link
      class="ml-3"
      style="text-decoration: none; color: #2a5885; font-size: 14px"
      to="/login"
    >
      {{ $t('textServicesMoreAbout') }}
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ManyServices extends Vue {
  $t!: any

  textOne = this.$t('textOneServices')
  textTwo = this.$t('textTwoServices')
  textThree = this.$t('textThreeServices')

  get services() {
    return [
      {
        icon: 'mdi-account-circle-outline',
        text: this.textOne,
      },
      {
        icon: 'mdi-shield-key-outline',
        text: this.textTwo,
      },
      {
        icon: 'mdi-card-minus-outline',
        text: this.textThree,
      },
    ]
  }
}
</script>
