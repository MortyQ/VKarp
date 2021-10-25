<template>
  <v-card class="mt-5 pa-1">
    <div class="d-flex justify-space-between align-center">
      <span class="ml-3"
        >Мои фотографии
        <span style="color: #cccccc">{{ this.user.gallery.length }}</span></span
      >
      <span class="mr-4" style="color: #cccccc">Показать на карте</span>
    </div>
    <v-row cols="10" class="mt-3 pa-0 ma-0" v-if="user">
      <v-col cols="3" class="d-flex justify-center align-center mt-3">
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
      <v-col cols="3" v-for="item in this.user.gallery" :key="item.id">
        <v-img
          height="100%"
          width="100%"
          :src="getStrapiMedia(item.url)"
          :lazy-src="getStrapiMedia(item.url)"
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
  },
})
export default class Gallery extends Vue {
  user!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
  files: File | null = null

  test() {
    console.log(this.user.gallery)
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
