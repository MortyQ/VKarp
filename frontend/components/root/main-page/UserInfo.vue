<template>
  <v-card class="pa-3">
    <div class="d-flex justify-space-between align-center">
      <v-card-title>Alexey Kurasa (это Вы)</v-card-title>
      <span style="color: #cccccc">online</span>
    </div>
    <span class="ml-4"> Слава Україні </span>
    <v-divider class="my-2"></v-divider>
    <v-list class="ml-6" color="transparent">
      <v-list-item
        style="height: 20px; width: 90%"
        class="ma-0 pa-0"
        v-for="item in getInfo"
        :key="item.value"
      >
        <v-list-item-content class="d-flex flex-row justify-space-around">
          <v-row>
            <v-col class="d-flex justify-start align-center" cols="4">
              <span style="color: #aaaaaa; font-size: 14px">{{
                item.title
              }}</span>
            </v-col>
            <v-col cols="8">
              <span style="color: #6488b1; font-size: 14px">
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
          <div
            class="d-flex justify-center align-center"
            style="color: #6488b1; font-size: 14px"
          >
            Показать подробную информацию
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list color="transparent">
            <v-list-item
              style="height: 20px; width: 90%"
              class="ma-0 pa-0"
              v-for="item in getInfo"
              :key="item.value"
            >
              <v-list-item-content class="d-flex flex-row justify-space-around">
                <v-row>
                  <v-col class="d-flex justify-start align-center" cols="4">
                    <span style="color: #aaaaaa; font-size: 14px">{{
                      item.title
                    }}</span>
                  </v-col>
                  <v-col cols="8">
                    <span style="color: #6488b1; font-size: 14px">
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
        class="d-flex flex-column pa-2"
        style="width: 20%"
        v-for="item in statistic"
        :key="item.id"
      >
        <span style="color: #6488b1; font-size: 20px; text-align: center">
          {{ item.value }}
        </span>
        <span style="color: #aaaaaa; font-size: 14px; text-align: center">
          {{ item.title }}
        </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component({
  components: {},
  computed: { ...mapState('register', ['steps']) },
})
export default class UserInfo extends Vue {
  get getInfo() {
    return [
      { title: 'Дата Рождения', value: '30 марта 1996 г.' },
      { title: 'Город', value: 'Харьков' },
      { title: 'Место работы', value: 'Shark Software' },
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
