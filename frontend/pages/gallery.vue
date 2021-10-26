<template>
  <v-card style="min-height: 70%">
    <v-card-title>
      Моя галерея <span class="ml-4"> ({{ user.gallery.length }})</span>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-row>
      <v-col cols="12">
        <v-carousel v-if="user && user.gallery">
          <v-carousel-item
            v-for="item in this.user.gallery"
            :key="item.id"
            :src="getStrapiMedia(item.url)"
            :lazy-src="getStrapiMedia(item.url)"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
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
  },
})
export default class GalleryPage extends Vue {
  user!: UserType
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
      id: this.$route.params.id,
    })
  }
}
</script>
