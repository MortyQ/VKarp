<template>
  <v-card flat tile color="#f7f8fa">
    <v-card-title class="d-flex">
      <v-img
        max-width="20px"
        height="20px"
        width="20px"
        class="border_radius-5"
        src="/vklogo.png"
        lazy-src="/vklogo.png"
      >
      </v-img>
      <span class="ml-2">ID</span>
    </v-card-title>
    <v-card-text>
      <span class="title_text">
        Единая платформа для авторизации во множестве сервисов
      </span>
    </v-card-text>
    <v-row class="ml-auto mb-2" v-for="item in services" :key="item.id">
      <v-col cols="1">
        <v-icon size="30px" color="#626d7a">
          {{ item.icon }}
        </v-icon>
      </v-col>
      <v-col cols="10" class="ml-1">
        <span class="font_vk_mobile_p">
          {{ item.text }}
        </span>
      </v-col>
    </v-row>
    <nuxt-link class="ml-3 footer_text" to="/login">
      Подробнее о VK ID
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ManyServices extends Vue {
  textOne =
    'Создайте аккаунт ВКонтакте и используйте его для входа в другие сервисы'
  textTwo =
    'Ваши данные под защитой: настройте подтверждение входа и следите за историей активности'
  textThree = 'Неважно, телефон или компьютер — VK ID работает где угодно'

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
