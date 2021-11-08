<template>
  <v-card
    tile
    v-if="user"
    class="d-flex flex-column justify-space-between align-space-between"
    width="100%"
    height="500"
  >
    <v-dialog
      v-model="dialog"
      min-width="500px"
      max-width="600px"
      width="100%"
      height="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          v-if="userAvatar"
          height="400"
          class="object-fit-cover"
          width="100%"
          :src="getStrapiMedia(userAvatar)"
          :lazy-src="getStrapiMedia(userAvatar)"
          v-bind="attrs"
          v-on="on"
        >
        </v-img>
        <v-img
          v-else
          height="200"
          width="100%"
          lazy-src="/default-image.jpeg"
          src="/default-image.jpeg"
          v-bind="attrs"
          v-on="on"
        >
        </v-img>
      </template>
      <v-card
        tile
        flat
        min-width="500px"
        max-width="600px"
        width="100%"
        height="530"
        class="pa-4"
      >
        <v-card-title>Изменить автар профиля</v-card-title>
        <v-divider class="my-2"></v-divider>
        <v-row>
          <v-col cols="6">
            <div>
              <v-img
                v-if="user.avatar"
                height="400px"
                width="300px"
                :src="getStrapiMedia(user.avatar.url)"
                :lazy-src="getStrapiMedia(user.avatar.url)"
              >
              </v-img>
              <v-img
                v-else
                height="400px"
                width="300px"
                :src="urlUser"
                lazy-src="/default-image.jpeg"
              >
              </v-img>
            </div>
          </v-col>
          <v-col cols="6" class="d-flex flex-column justify-space-between">
            <div class="d-flex mt-5">
              <v-file-input
                label="Загрузить новый аватар"
                v-model="avatar"
                solo
                outlined
              />
            </div>
            <v-btn
              height="35px"
              width="100%"
              depressed
              color="#a9d1ff"
              :loading="loading"
              @click="changeAvatar()"
            >
              <span class="font_10"> Загрузить новый аватар </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-row
      cols="12"
      class="d-flex justify-space-between align-center ma-0 pa-0"
      v-if="signUser.id === user.id"
    >
      <v-col cols="12">
        <div class="ranks">833943</div>
      </v-col>
      <v-col cols="12" lg="8" v-if="user && user.id" class="pa-0 mb-6 ml-3">
        <v-btn
          height="35px"
          width="100%"
          depressed
          color="#a9d1ff"
          to="/setting"
        >
          <span class="font_10"> Редактировать </span>
        </v-btn>
      </v-col>
      <v-col
        v-if="$vuetify.breakpoint.width > 1300"
        cols="12"
        lg="3"
        xl="3"
        class="d-flex justify-center align-center pa-0 mb-6"
      >
        <v-btn
          max-width="40px"
          width="100%"
          min-width="40px"
          height="35px"
          depressed
          color="#a9d1ff"
        >
          <v-icon color="#6488b1" small> mdi-chart-bar </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        class="ma-0 mt-4 pa-0 d-flex justify-center align-center"
      >
        <v-btn height="35px" width="80%" depressed color="#a9d1ff">
          <span class="font_10"> Написать </span>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        class="ma-0 mb-4 pa-0 d-flex justify-center align-center"
      >
        <v-btn height="35px" width="80%" depressed color="#a9d1ff">
          <span class="font_10"> Добавить в друзья </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { getStrapiMedia } from '@/utils/medias'
import { mapState } from 'vuex'
import { UserType } from '@/helpers/userType'
@Component({
  computed: {
    ...mapState('register', ['signUser']),
    ...mapState('profile', ['user']),
  },
})
export default class Photo extends Vue {
  user!: UserType
  signUser!: UserType

  getStrapiMedia = getStrapiMedia

  avatar: File | null = null
  loading: boolean = false
  dialog: boolean = false

  get urlUser(): string | null {
    if (!this.avatar) return null
    console.log(this.avatar)
    return URL.createObjectURL(this.avatar)
  }

  get userAvatar() {
    if (!this.user?.avatar?.url) return null
    return this.user.avatar.url
  }

  changeAvatar() {
    this.loading = true
    let formdata = new FormData()
    console.log(this.avatar)
    if (this.avatar) {
      formdata.append('files', this.avatar)
    }
    this.$store.dispatch('profile/UPDATE_AVATAR', {
      formdata,
      id: this.signUser.id,
    })
    this.loading = false
    this.dialog = false
  }

  mounted() {}
}
</script>
