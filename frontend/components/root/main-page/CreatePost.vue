<template>
  <v-card class="mt-5 pa-2">
    <v-row>
      <v-col cols="2" class="d-flex justify-end align-center">
        <v-img
          v-if="user.avatar"
          height="100%"
          width="100%"
          max-height="50px"
          max-width="50px"
          min-height="50px"
          min-width="50px"
          :src="getStrapiMedia(user.avatar.url)"
          :lazy-src="getStrapiMedia(user.avatar.url)"
          style="border-radius: 50%"
        >
        </v-img>
        <v-img
          v-else
          height="100%"
          width="100%"
          max-height="50px"
          max-width="50px"
          min-height="50px"
          min-width="50px"
          lazy-src="/default-image.jpeg"
          src="/default-image.jpeg"
          style="border-radius: 50%"
        >
        </v-img
      ></v-col>
      <v-col cols="5">
        <v-text-field full-width label="Что у вас нового ?"></v-text-field
      ></v-col>
      <v-col cols="5" class="d-flex justify-center align-center">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="2">
            <v-btn icon>
              <v-icon> mdi-camera-outline </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon>
              <v-icon> mdi-webcam </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon>
              <v-icon> mdi-music </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon>
              <v-icon> mdi-text-long </v-icon>
            </v-btn>
          </v-col>
          <v-divider class="my-2 ml-4" vertical></v-divider>
          <v-col cols="2" class="mr-4">
            <v-btn icon>
              <v-icon> mdi-looks </v-icon>
            </v-btn>
          </v-col>
        </v-row>
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
    ...mapState('profile', ['user']),
  },
})
export default class CreatePost extends Vue {
  user!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
}
</script>
