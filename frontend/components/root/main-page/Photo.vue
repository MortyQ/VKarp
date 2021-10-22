<template>
  <v-card tile class="pa-2" style="max-width: 100%">
    <v-img
      v-if="!user.avatar"
      height="400px"
      width="100%"
      lazy-src="/default-image.jpeg"
      src="/default-image.jpeg"
    >
    </v-img>

    <v-img
      v-else
      height="400px"
      width="100%"
      :src="getStrapiMedia(user.avatar.url)"
      :lazy-src="getStrapiMedia(user.avatar.url)"
    >
    </v-img>
    <div class="ranks mt-2 mb-2">833943</div>
    <v-row cols="12" class="d-flex justify-space-between align-center">
      <v-col cols="12" lg="8">
        <v-btn height="35px" width="100%" depressed color="#a9d1ff">
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
export default class Photo extends Vue {
  user!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
}
</script>
