<template>
  <v-app>
    <v-app-bar app color="white" tile flat height="48px">
      <AppBar />
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col v-if="$vuetify.breakpoint.width > 1000" cols="3">
            <v-sheet
              rounded="lg"
              class="d-flex justify-space-around"
              style="background: #edeef0"
            >
              <v-list color="transparent">
                <v-list-item
                  style="height: 20px; width: 100%"
                  class="ma-0 pa-0"
                  v-for="item in mainNav"
                  :key="item.id"
                  link
                  :to="item.to"
                >
                  <v-list-item-content
                    class="d-flex flex-row justify-space-around"
                  >
                    <div class="d-flex flex-row justify-start">
                      <v-icon class="mr-3" small color="#5181b8">{{
                        item.icon
                      }}</v-icon>
                      <span style="font-size: 14px">
                        {{ item.name }}
                      </span>
                      <div style="position: absolute; left: 100%; top: 25%">
                        <v-badge
                          v-if="item.message != ''"
                          :content="item.message"
                          inline
                        ></v-badge>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  style="height: 20px; width: 100%"
                  class="ma-0 pa-0"
                  v-for="item in secondNav"
                  :key="item.id"
                  link
                >
                  <v-list-item-content
                    class="d-flex flex-row justify-space-around"
                  >
                    <div class="d-flex flex-row justify-start">
                      <v-icon class="mr-3" color="#5181b8" small>{{
                        item.icon
                      }}</v-icon>
                      <span style="font-size: 14px">
                        {{ item.name }}
                      </span>
                      <div style="position: absolute; left: 100%">
                        <v-badge
                          v-if="item.message != ''"
                          :content="item.message"
                          inline
                        ></v-badge>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>

                <v-list-item
                  style="height: 20px; width: 90%"
                  class="ma-0 pa-0"
                  v-for="item in lastNav"
                  :key="item.id"
                  link
                >
                  <v-list-item-content
                    class="d-flex flex-row justify-space-around"
                  >
                    <div class="d-flex flex-row justify-start nav-list-text">
                      <v-icon class="mr-3" color="#5181b8" small>{{
                        item.icon
                      }}</v-icon>
                      <span style="font-size: 14px">
                        {{ item.name }}
                      </span>
                      <div style="position: absolute; left: 100%">
                        <v-badge
                          v-if="item.message != ''"
                          :content="item.message"
                          inline
                        ></v-badge>
                      </div>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="9">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppBar from '@/components/root/login/AppBar.vue'
import Footer from '@/components/root/login/Footer.vue'
import { mapState } from 'vuex'
import { UserType } from '@/helpers/userType'

@Component({
  components: { AppBar, Footer },
  computed: {
    ...mapState('register', ['steps']),
    ...mapState('profile', ['user']),
  },
})
export default class DefaultLayout extends Vue {
  steps!: number
  user!: UserType
  get mainNav() {
    return [
      {
        icon: 'mdi-account-circle-outline',
        name: 'Моя страница',
        message: '',
        to: `/${this.user?.id}`,
      },
      {
        icon: 'mdi-calendar-blank-outline',
        name: 'Новости',
        message: '2',
        to: '/',
      },
      {
        icon: 'mdi-message-outline',
        name: 'Мессенджер',
        message: '94',
        to: '/',
      },
      {
        icon: 'mdi-account-multiple-outline',
        name: 'Друзья',
        message: '9843',
        to: '/',
      },
      {
        icon: 'mdi-account-group-outline',
        name: 'Сообщества',
        message: '21',
        to: '/',
      },
      {
        icon: 'mdi-image-multiple-outline',
        name: 'Фотографии',
        message: '',
        to: '/',
      },
      { icon: 'mdi-music', name: 'Музыка', message: '', to: '/' },
      {
        icon: 'mdi-gamepad-variant-outline',
        name: 'Игры',
        message: '',
        to: '/',
      },
      { icon: 'mdi-video-input-svideo', name: 'Видео', message: '', to: '/' },
      { icon: 'mdi-video-outline', name: 'Клипы', message: '', to: '/' },
    ]
  }

  get secondNav() {
    return [
      { icon: 'mdi-dots-grid', name: 'Мини-приложения', message: '' },
      { icon: 'mdi-currency-usd', name: 'VK Pay', message: '' },
      { icon: 'mdi-briefcase-outline', name: 'Работа', message: '' },
    ]
  }

  get lastNav() {
    return [
      { icon: 'mdi-archive-outline', name: 'Заказы', message: '' },
      { icon: 'mdi-bag-personal-outline', name: 'Товары', message: '' },
      { icon: 'mdi-star-settings-outline', name: 'Закладки', message: '' },
      { icon: 'mdi-file-outline', name: 'Файлы', message: '' },
      { icon: 'mdi-bullhorn-outline', name: 'Реклама', message: '' },
    ]
  }

  mounted() {
    console.log(this.user)
  }
}
</script>
