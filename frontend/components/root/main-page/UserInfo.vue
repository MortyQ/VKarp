<template>
  <v-card width="100%" min-width="100%" max-width="100%" class="pa-3">
    <div class="d-flex justify-space-between align-center">
      <v-card-title
        >{{ user.firstName }} {{ user.lastName }}
        <span v-if="user.id === signUser.id">(это Вы)</span>
      </v-card-title>
      <span class="opacity_nice_text">online</span>
    </div>
    <span v-if="!user.statusProfile" class="ml-4"> Слава Україні </span>
    <span v-else class="ml-4"> {{ user.statusProfile }} </span>
    <v-divider class="my-2"></v-divider>
    <v-list color="transparent">
      <v-list-item v-for="item in getInfo" :key="item.value" v-if="item.value">
        <v-list-item-content class="d-flex flex-row justify-space-around">
          <v-row>
            <v-col class="d-flex justify-start align-center" cols="5">
              <span class="opacity_nice_text">{{ item.title }}</span>
            </v-col>
            <v-col cols="7">
              <span class="vk_style_blue_text">
                {{ item.value }}
              </span>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-expansion-panels tile flat>
      <v-expansion-panel>
        <v-expansion-panel-header hide-actions>
          <div class="d-flex justify-center align-center vk_style_blue_text">
            Показать подробную информацию
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list color="transparent">
            <v-list-item
              class="ma-0 pa-0 user_info-list"
              v-for="item in moreInfo"
              :key="item.id"
              v-if="item.value"
            >
              <v-list-item-content class="d-flex flex-row justify-space-around">
                <v-row>
                  <v-col class="d-flex justify-start align-center" cols="5">
                    <span class="opacity_nice_text">{{ item.title }}</span>
                  </v-col>
                  <v-col cols="6">
                    <span class="vk_style_blue_text">
                      {{ item.value }}
                    </span>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider class="my-2"></v-divider>
    <div class="d-flex">
      <div
        class="d-flex flex-column pa-2 width_20"
        v-for="item in statistic"
        :key="item.id"
      >
        <span class="vk_user-info_statistic">
          {{ item.value }}
        </span>
        <span class="opacity_nice_text">
          {{ item.title }}
        </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { UserType } from '@/helpers/userType'
@Component({
  components: {},
  computed: {
    ...mapState('profile', ['user']),
    ...mapState('register', ['signUser']),
  },
})
export default class UserInfo extends Vue {
  user!: UserType
  signUser!: UserType

  get getInfo() {
    return [
      { title: 'Дата Рождения', value: this.user.birthday },
      { title: 'Город', value: this.user.city },
      { title: 'Место работы', value: this.user.work },
    ]
  }
  get moreInfo() {
    return [
      { title: 'Пол', value: this.user.sex },
      { title: 'Семейное положение', value: this.user.statuses },
      { title: 'Место учебы', value: this.user.study },
      { title: 'Почта', value: this.user.email },
      { title: 'Другие социальные сети', value: this.user.social },
      { title: 'Увлечения', value: this.user.hobbi },
      { title: 'Родители', value: this.user.parents },
      { title: 'Любимая книга', value: this.user.book },
      { title: 'Любимая музыкальная группа', value: this.user.music },
    ]
  }
  get statistic() {
    return [
      { title: 'Друзей', value: '87' },
      { title: 'Подписчиков', value: '931' },
      { title: 'Фотографии', value: '3' },
      { title: 'Отметки', value: '9235' },
      { title: 'Видеозаписи', value: '1' },
    ]
  }
}
</script>
