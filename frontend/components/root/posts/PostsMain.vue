<template>
  <v-card tile flat>
    <v-row>
      <span class="ml-8"> </span>
      <v-col cols="2">
        <!-- <v-img
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
        </v-img> -->
      </v-col>
      <v-col cols="6" class="ml-2">
        <span class="d-flex post_user_name" v-if="signUser.id === user.id">
          {{ signUser.firstName }}
          {{ signUser.lastName }}
        </span>
        <span class="d-flex post_user_name" v-else>
          {{ user.firstName }}
          {{ user.lastName }}
        </span>
        <span class="d-flex post_time_message">
          {{ $dayjs(time).format('YYYY-MM-DD в HH:MM') }}
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        {{ post }}
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
    ...mapState('register', ['signUser']),
  },
})
export default class PostBody extends Vue {
  user!: UserType
  signUser!: UserType
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
  date: Date | null = null

  @Prop({ default: 'POST' })
  post!: string

  @Prop()
  id!: number

  @Prop()
  time!: string

  get messageDate() {
    return new Date().toLocaleTimeString()
  }
}
</script>
