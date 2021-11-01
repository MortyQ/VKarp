<template>
  <v-container>
    <v-row cols="12" v-if="user" :key="user.id">
      <v-col
        md="3"
        xl="3"
        cols="3"
        class="
          d-flex
          flex-column
          justify-md-start
          align-md-start
          justify-center
          align-center
        "
        style="max-width: 210px"
      >
        <Photo />
        <Gifts />
        <Friends />
      </v-col>
      <v-col cols="8" md="8" xl="8" style="max-width: 510px">
        <UserInfo />
        <Gelery />
        <CreatePost />
        <Posts />
      </v-col>
    </v-row>
    <v-row v-else> ClickHere </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Photo from '@/components/root/main-page/Photo.vue'
import UserInfo from '@/components/root/main-page/UserInfo.vue'
import Gifts from '@/components/root/main-page/Gifts.vue'
import Gelery from '~/components/root/main-page/Gallery.vue'
import CreatePost from '@/components/root/main-page/CreatePost.vue'
import Friends from '@/components/root/main-page/Friends.vue'
import Posts from '@/components/root/posts/PostBody.vue'
import { UserType } from '@/helpers/userType'
import { mapState } from 'vuex'

@Component({
  components: { Photo, UserInfo, Gifts, Gelery, CreatePost, Friends, Posts },
  computed: {
    ...mapState('register', ['signUser']),
    ...mapState('profile', ['user']),
  },
  middleware: 'redirect',
})
export default class IndexPage extends Vue {
  user!: UserType
  signUser!: UserType
  mounted() {
    this.$store.dispatch('profile/GET_USER_BY_ID', this.$route.params.id)
  }
}
</script>
