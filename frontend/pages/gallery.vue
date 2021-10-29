<template>
  <v-card class="pa-8" v-if="signUser && signUser.gallery">
    <v-card-title>
      Моя галерея
      <span class="ml-4"> ({{ signUser.gallery.length }} фото) </span>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <!-- <v-row>
      <v-col cols="12">
        <v-carousel v-if="signUser && signUser.gallery">
          <v-carousel-item
            v-for="item in this.signUser.gallery"
            :key="item.id"
            :src="getStrapiMedia(item.url)"
            :lazy-src="getStrapiMedia(item.url)"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col
        v-for="item in this.signUser.gallery"
        :key="item.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="getStrapiMedia(item.url)"
          :lazy-src="getStrapiMedia(item.url)"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
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
  middleware: 'redirect',
})
export default class GalleryPage extends Vue {
  user!: UserType
  signUser!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
  files: File | null = null

  test() {
    console.log(this.signUser)
  }

  //   load() {
  //     let formdata = new FormData()
  //     if (this.files) {
  //       formdata.append('files', this.files)
  //     }
  //     this.$store.dispatch('profile/ADD_PHOTO_TO_GALLERY', {
  //       formdata,
  //       id: this.$route.params.id,
  //     })
  //   }
}
</script>
