<template>
  <v-container class="d-flex justify-end align-center position-relative">
    <v-img
      max-height="35"
      max-width="35"
      src="/vklogo.png"
      class="vk_logo-appbar"
    >
    </v-img>
    <span v-if="steps === 2" class="title_text vk_text-appbar">Вконтакте</span>

    <v-row class="search_user" v-if="signUser && users">
      <v-col cols="12">
        <v-text-field
          flat
          tile
          v-model="search"
          v-if="steps === 2"
          solo
          hide-details
          class="ma-0 pa-0"
          outlined
          background-color="#edeef0"
          prepend-inner-icon="mdi-magnify"
          @input="trottledSave()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="search_user-list">
        <v-card tile flat>
          <v-list v-if="users && signUser && users.length != 0">
            <v-list-item
              v-for="item in users"
              :key="item.id"
              :to="`/${item.id}`"
              @click="updatePage()"
            >
              <v-row>
                <v-col cols="2">
                  <v-img
                    height="30px"
                    width="30px"
                    :src="getStrapiMedia(item.avatar.url)"
                    :lazy-src="getStrapiMedia(item.avatar.url)"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="7">
                  <pre
                    class="
                      roboto_text_style
                    ">{{ item.firstName }} {{ item.lastName }}     
                     <span class="opacity_nice_text">online</span></pre>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-btn text v-if="steps === 1" @click="goToHome()"> sign Out </v-btn>

    <v-btn @click="logout()" text v-if="steps === 2"> Выйти </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { getStrapiMedia } from '@/utils/medias'
import { UserType } from '@/helpers/userType'
import trottle from '@/helpers/trottle'
@Component({
  layout: 'login',
  computed: {
    ...mapState('register', ['steps']),
    ...mapState('register', ['signUser']),
    ...mapState('profile', ['users']),
  },
})
export default class AppBar extends Vue {
  steps!: number
  users!: UserType[]
  signUser!: UserType
  search: string | null = ''

  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''

  goToHome() {
    this['$store'].dispatch('register/CHANGE_STEP_PAGE', 0)
  }

  get trottledSave() {
    let DELAY = 1000
    return trottle(this.searchUser, DELAY)
  }

  async searchUser() {
    if (this.users) {
      await this['$store'].dispatch(
        'profile/SEARCH_USER_BY_FIRST_NAME',
        this.search
      )
    }
  }

  logout() {
    this['$store'].dispatch('register/LOGOUT')
    this['$store'].dispatch('register/CHANGE_STEP_PAGE', 0)
    this.$router.push('/login')
  }

  updatePage() {
    this['$store'].dispatch('profile/SEARCH_USER_BY_FIRST_NAME', null)
  }

  mounted() {
    this.search = null
    this['$store'].dispatch('profile/SEARCH_USER_BY_FIRST_NAME', null)
  }
}
</script>
