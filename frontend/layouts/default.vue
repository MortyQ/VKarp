<template>
  <v-app v-if="signUser">
    <v-app-bar app color="white" tile flat height="48px">
      <AppBar />
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            v-if="$vuetify.breakpoint.width > 1000"
            cols="2"
            md="2"
            lg="4"
            class="d-flex justify-end"
          >
            <v-sheet
              rounded="lg"
              class="d-flex justify-space-around background_main"
            >
              <v-list color="transparent">
                <v-list-item
                  class="ma-0 pa-0 user_info-list"
                  v-for="item in mainNav"
                  :key="item.id"
                  link
                  :ripple="false"
                  :to="item.to"
                >
                  <v-list-item-content
                    class="d-flex flex-row justify-space-around"
                  >
                    <div class="d-flex flex-row justify-start">
                      <v-icon class="mr-3" small color="#5181b8">{{
                        item.icon
                      }}</v-icon>
                      <span class="post_user_name">
                        {{ item.name }}
                      </span>
                      <div class="position_dots_nav-message">
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
                  class="ma-0 pa-0 user_info-list"
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
                      <span class="post_user_name">
                        {{ item.name }}
                      </span>
                      <div class="position_dots_nav">
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
                  class="ma-0 pa-0 user_info-list"
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
                      <span class="post_user_name">
                        {{ item.name }}
                      </span>
                      <div class="position_dots_nav">
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

          <v-col
            cols="12"
            md="10"
            lg="8"
            class="d-flex justify-start align-center"
          >
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="background_main"> <Footer /></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppBar from '@/components/root/login/AppBar.vue'
import Footer from '@/components/root/login/Footer.vue'
import { mapState } from 'vuex'
import { UserType } from '@/helpers/userType'
import axios from 'axios'

@Component({
  components: { AppBar, Footer },
  computed: {
    ...mapState('register', ['signUser']),
    ...mapState('profile', ['user']),
  },
})
export default class DefaultLayout extends Vue {
  steps!: number
  user!: UserType
  signUser!: UserType

  test() {
    console.log(this.signUser)
  }

  get photoCount() {
    if (this.signUser && this.signUser.gallery) {
      return this.signUser.gallery.length
    } else return 7
  }

  get mainNav() {
    return [
      {
        icon: 'mdi-account-circle-outline',
        name: 'Моя страница',
        message: '',
        to: `/${this.signUser?.id}`,
      },
      {
        icon: 'mdi-calendar-blank-outline',
        name: 'Новости',
        message: '2',
        to: `/setting`,
      },
      {
        icon: 'mdi-message-outline',
        name: 'Мессенджер',
        message: '94',
        to: `/setting`,
      },
      {
        icon: 'mdi-account-multiple-outline',
        name: 'Друзья',
        message: '9843',
        to: `/setting`,
      },
      {
        icon: 'mdi-account-group-outline',
        name: 'Сообщества',
        message: '21',
        to: `/setting`,
      },
      {
        icon: 'mdi-image-multiple-outline',
        name: 'Фотографии',
        message: this.photoCount,
        to: '/gallery',
      },
      { icon: 'mdi-music', name: 'Музыка', message: '', to: `/setting` },
      {
        icon: 'mdi-gamepad-variant-outline',
        name: 'Игры',
        message: '',
        to: `/setting`,
      },
      {
        icon: 'mdi-video-input-svideo',
        name: 'Видео',
        message: '',
        to: `/setting`,
      },
      {
        icon: 'mdi-video-outline',
        name: 'Клипы',
        message: '',
        to: `/setting`,
      },
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
}
</script>
