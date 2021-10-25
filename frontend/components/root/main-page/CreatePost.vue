<template>
  <v-card class="mt-5 pa-2">
    <v-row>
      <v-col cols="2">
        <v-img
          v-if="user.avatar"
          height="50px"
          width="50px"
          :src="getStrapiMedia(user.avatar.url)"
          :lazy-src="getStrapiMedia(user.avatar.url)"
          style="border-radius: 50%"
        >
        </v-img
      ></v-col>
      <v-col cols="4"> </v-col>
      <v-col cols="5"> </v-col>
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
