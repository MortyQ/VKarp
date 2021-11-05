<template>
  <v-card class="mt-5 pa-1">
    <div class="d-flex justify-space-between align-start" v-if="user.gallery">
      <span class="ml-3 d-flex justify-start gap_10px"
        >Мои фотографии
        <span class="color_ccc">{{ this.user.gallery.length }}</span></span
      >
      <div class="d-flex justify-end align-end text_gallery color_ccc">
        Показать на карте
      </div>
    </div>
    <v-row
      cols="10"
      class="mt-3 pa-0 ma-0"
      v-if="user && !galleryStatus"
      key="user"
    >
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
          :loading="loading"
        >
        </v-file-input>
      </v-col>
      <v-col
        cols="3"
        v-for="(item, index) in gallery"
        :key="item.id"
        v-if="index <= 2"
      >
        <div v-if="user.gallery">
          <v-img
            height="190px"
            width="100%"
            :src="getStrapiMedia(item.url)"
            :lazy-src="getStrapiMedia(item.url)"
          >
          </v-img>
        </div>
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

  getStrapiMedia = getStrapiMedia

  files: File | null = null
  loading: boolean = false
  galleryStatus: boolean = false

  get gallery() {
    if (!this.user?.gallery) return null
    return this.user?.gallery.reverse()
  }

  load() {
    this.loading = true
    let formdata = new FormData()
    console.log(this.files)

    if (this.files) {
      formdata.append('files', this.files)
    }
    this.$store.dispatch('profile/ADD_PHOTO_TO_GALLERY', {
      formdata,
      id: this.signUser.id,
    })
    setTimeout(() => {
      this.loading = false
      this.files = null
    }, 1000)
  }
}
</script>
