<template>
  <v-card tile class="pa-2" style="max-width: 100%" v-if="user">
    <v-dialog
      v-model="dialog"
      min-width="500px"
      max-width="600px"
      width="100%"
      height="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          v-if="user.avatar"
          height="400px"
          width="100%"
          :src="getStrapiMedia(user.avatar.url)"
          :lazy-src="getStrapiMedia(user.avatar.url)"
          v-bind="attrs"
          v-on="on"
        >
        </v-img>
        <v-img
          v-if="!user.avatar"
          height="400px"
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
                style="max-width: 250px"
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
              <span style="font-size: 10px !important">
                Загрузить новый аватар
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <div class="ranks mt-2 mb-2">833943</div>
    <v-row
      cols="12"
      class="d-flex justify-space-between align-center"
      v-if="signUser.id === user.id"
    >
      <v-col cols="12" lg="8" v-if="user && user.id">
        <v-btn
          height="35px"
          width="100%"
          depressed
          color="#a9d1ff"
          to="/setting"
        >
          <span style="font-size: 10px !important"> Редактировать </span>
        </v-btn>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.width > 1300" cols="12" lg="4">
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
      <v-col cols="12">
        <v-btn
          height="35px"
          width="100%"
          depressed
          color="#a9d1ff"
          to="/setting"
        >
          <span style="font-size: 10px !important"> Написать </span>
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
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''

  avatar: File | null = null
  loading: boolean = false
  dialog: boolean = false

  get urlUser(): string | null {
    if (!this.avatar) return null
    console.log(this.avatar)
    return URL.createObjectURL(this.avatar)
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

    setTimeout(() => {
      this.loading = false
    }, 2000)
  }

  mounted() {}
}
</script>
