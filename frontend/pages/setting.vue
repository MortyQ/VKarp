<template>
  <v-card class="mt-8" v-if="signUser">
    <v-card-title> Основные </v-card-title>

    <v-divider class="my-2"></v-divider>
    <v-row v-if="user" class="pa-2">
      <v-col cols="12" class="ml-4 d-flex flex-column align-center">
        <ValidationObserver>
          <ValidationProvider v-slot="{ errors }" rules="alpha">
            <v-row class="d-flex align-center">
              <v-col cols="5" class="d-flex">
                <span class="mr-2">Имя</span>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  class="secondStep_register-input mt-3 mb-3"
                  v-model="settingUserInfo.firstName"
                  required
                  passive
                  outlined
                  :error-messages="errors"
                  solo
                  placeholder="Имя"
                  label="Имя"
                ></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="alpha">
            <v-row class="d-flex align-center">
              <v-col cols="5">
                <span class="mr-2">Фамилия</span>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  class="secondStep_register-input mt-3 mb-3"
                  v-model="settingUserInfo.lastName"
                  required
                  passive
                  outlined
                  :error-messages="errors"
                  solo
                  placeholder="Фамилия"
                  label="Фамилия"
                ></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>

          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Статус профиля</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.statusProfile"
                required
                passive
                outlined
                solo
                placeholder="Статус профиля"
                label="Статус профиля"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="my-2"></v-divider>

          <ValidationProvider v-slot="{ errors }" rules="alpha">
            <v-row class="d-flex align-center">
              <v-col cols="5">
                <span class="mr-2">Девичья Фамилия</span>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  class="secondStep_register-input mt-3 mb-3"
                  v-model="settingUserInfo.motherLastName"
                  required
                  passive
                  outlined
                  :error-messages="errors"
                  solo
                  placeholder="Девичья Фамилияя"
                  label="Девичья Фамилия"
                ></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="alpha">
            <v-row class="d-flex align-center">
              <v-col cols="5">
                <span class="mr-2">Родной город</span>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  class="secondStep_register-input mt-3 mb-3"
                  v-model="settingUserInfo.city"
                  required
                  passive
                  outlined
                  :error-messages="errors"
                  solo
                  placeholder="Родной город"
                  label="Родной город"
                ></v-text-field>
              </v-col>
            </v-row>
          </ValidationProvider>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Место учебы</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.study"
                required
                passive
                outlined
                solo
                placeholder="Место учебы"
                label="Место учебы"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Место работы</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.work"
                required
                passive
                outlined
                solo
                placeholder="Место работы"
                label="Место работы"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="my-2"></v-divider>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Семейное положение</span>
            </v-col>
            <v-col cols="7">
              <v-select
                class="where_girl"
                :items="statuses"
                v-model="settingUserInfo.statuses"
                outlined
                solo
                label="Семейное положение"
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Родители</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.parents"
                required
                passive
                outlined
                solo
                placeholder="Родители"
                label="Родители"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider class="my-2"></v-divider>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Другие социальные сети</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.social"
                required
                passive
                outlined
                solo
                placeholder="Другие социальные сети"
                label="Другие социальные сети"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Хобби</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.hobbi"
                required
                passive
                outlined
                solo
                placeholder="Хобби"
                label="Хобби"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Любимая Книга</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.book"
                required
                passive
                outlined
                solo
                placeholder="Любимая Книга"
                label="Любимая Книга"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center">
            <v-col cols="5">
              <span class="mr-2">Любимая музыкальная группа</span>
            </v-col>
            <v-col cols="7">
              <v-text-field
                class="secondStep_register-input mt-3 mb-3"
                v-model="settingUserInfo.music"
                required
                passive
                outlined
                solo
                placeholder="Любимая музыкальная группа"
                label="Любимая музыкальная группа"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-divider class="my-2"></v-divider>
        </ValidationObserver>
        <v-btn
          class="mt-2 btn_sign"
          :loading="loading"
          @click="changeUserInfo()"
        >
          Сохранить изминения
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { UserType } from '@/helpers/userType'
import { mapState } from 'vuex'
import { statuses } from '@/helpers/enum'
@Component({
  components: {},
  computed: {
    ...mapState('profile', ['user']),
    ...mapState('register', ['signUser']),
  },
  middleware: 'redirect',
})
export default class Login extends Vue {
  steps!: number
  user!: UserType
  signUser!: UserType
  statuses = statuses
  loading: boolean = false

  get settingUserInfo() {
    return {
      id: this.signUser.id,
      firstName: this.signUser.firstName,
      lastName: this.signUser.lastName,
      city: this.signUser.city,
      motherLastName: this.signUser.motherLastName,
      study: this.signUser.study,
      work: this.signUser.work,
      statuses: this.signUser.statuses,
      parents: this.signUser.parents,
      social: this.signUser.social,
      hobbi: this.signUser.hobbi,
      book: this.signUser.book,
      music: this.signUser.music,
      statusProfile: this.signUser.statusProfile,
    }
  }

  async changeUserInfo() {
    this.loading = true
    await this['$store'].dispatch('profile/EDIT_PROFILE', this.settingUserInfo)
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>
