<template>
  <v-card class="mt-5 pa-1">
    <div class="d-flex justify-space-between align-start">
      <span class="ml-3 d-flex justify-start" style="gap: 10px"
        >Мои фотографии
        <span style="color: #cccccc">{{ this.user.gallery.length }}</span></span
      >
      <div
        class="d-flex justify-end align-end text_gallery"
        style="color: #cccccc"
      >
        Показать на карте
      </div>
    </div>
    <v-row cols="10" class="mt-3 pa-0 ma-0" v-if="user && !galleryStatus">
      <v-col
        cols="3"
        class="d-flex justify-center align-center mt-3"
        v-if="signUser.id === user.id"
      >
        <v-file-input
          v-model="files"
          label="+"
          placeholder="+"
          outlined
          solo
          class="photo_input"
          @change="load()"
        >
        </v-file-input>
      </v-col>
      <v-col cols="3">
        <v-img
          v-if="user.gallery && user.gallery[0]"
          height="190px"
          width="100%"
          :src="getStrapiMedia(this.user.gallery[0].url)"
          :lazy-src="getStrapiMedia(this.user.gallery[0].url)"
        >
        </v-img>
        <v-img
          v-else
          height="190px"
          width="100%"
          src="/default-image.jpeg"
          lazy-src="/default-image.jpeg"
        >
        </v-img>
      </v-col>
      <v-col cols="3">
        <v-img
          v-if="user.gallery && user.gallery[1]"
          height="190px"
          width="100%"
          :src="getStrapiMedia(this.user.gallery[1].url)"
          :lazy-src="getStrapiMedia(this.user.gallery[1].url)"
        >
        </v-img>
        <v-img
          v-else
          height="190px"
          width="100%"
          src="/default-image.jpeg"
          lazy-src="/default-image.jpeg"
        >
        </v-img>
      </v-col>
      <v-col cols="3">
        <v-img
          v-if="user.gallery && user.gallery[2]"
          height="190px"
          width="100%"
          :src="getStrapiMedia(this.user.gallery[2].url)"
          :lazy-src="getStrapiMedia(this.user.gallery[2].url)"
        >
        </v-img>
        <v-img
          v-else
          height="190px"
          width="100%"
          src="/default-image.jpeg"
          lazy-src="/default-image.jpeg"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { UserType } from '@/helpers/userType'
import { getStrapiMedia } from '@/utils/medias'
import { mapState } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapState('profile', ['user']),
    ...mapState('register', ['signUser']),
  },
})
export default class Gallery extends Vue {
  user!: UserType
  signUser!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
  files: File | null = null

  galleryStatus: boolean = false
  changeStatus() {
    this.galleryStatus = !this.galleryStatus
    console.log('now status', this.galleryStatus)
  }

  test() {
    console.log(this.user)
  }

  load() {
    let formdata = new FormData()
    if (this.files) {
      formdata.append('files', this.files)
    }
    this.$store.dispatch('profile/ADD_PHOTO_TO_GALLERY', {
      formdata,
      id: this.signUser.id,
    })
  }
}
</script>
