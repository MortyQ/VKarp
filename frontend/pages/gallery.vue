<template>
  <v-card class="pa-8" width="800px" v-if="signUser && signUser.gallery">
    <v-card-title v-if="galleryPhoto && galleryPhoto.length">
      Моя галерея
      <span class="ml-4"> ({{ galleryPhoto.length }} фото) </span>
    </v-card-title>
    <v-card-title v-else> Пустая галерея </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-row v-if="galleryPhoto && galleryPhoto.length">
      <v-col cols="12" v-if="signUser && signUser.gallery">
        <VueSlickCarousel ref="main" v-bind="settingsMain">
          <v-img
            width="100%"
            height="500px"
            v-for="item in galleryPhoto"
            :key="item.id"
            :src="getStrapiMedia(item.url)"
            :lazy-src="getStrapiMedia(item.url)"
          ></v-img>
        </VueSlickCarousel>
      </v-col>
    </v-row>
    <v-row v-if="galleryPhoto && galleryPhoto.length" class="mt-5">
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
      <v-col class="d-flex justify-center align-center">
        <v-btn @click="$vuetify.goTo(0)" icon :ripple="false">
          <v-icon large> mdi-arrow-up-bold-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { UserType } from '@/helpers/userType'
import { getStrapiMedia } from '@/utils/medias'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { mapState } from 'vuex'

@Component({
  components: { VueSlickCarousel },
  computed: {
    ...mapState('profile', ['user']),
    ...mapState('register', ['signUser']),
  },
  middleware: 'redirect',
})
export default class GalleryPage extends Vue {
  user!: UserType
  signUser!: UserType

  getStrapiMedia = getStrapiMedia

  public settingsMain = {
    focusOnSelect: true,
    fade: true,
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
  }

  get galleryPhoto() {
    if (this.signUser) {
      return this.signUser.gallery
    }
  }

  test() {
    console.log(this.signUser)
  }
}
</script>
