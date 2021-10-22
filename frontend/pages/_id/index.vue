<template>
  <v-container>
    <v-row v-if="user">
      <v-col cols="4">
        <Photo />
        <Gifts />
      </v-col>
      <v-col cols="8">
        <UserInfo />
        <Gelery />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Photo from '@/components/root/main-page/Photo.vue'
import UserInfo from '@/components/root/main-page/UserInfo.vue'
import Gifts from '@/components/root/main-page/Gifts.vue'
import Gelery from '~/components/root/main-page/Gallery.vue'
import { UserType } from '@/helpers/userType'
import { mapState } from 'vuex'

@Component({
  components: { Photo, UserInfo, Gifts, Gelery },
  computed: {
    ...mapState('register', ['steps']),
    ...mapState('profile', ['user']),
  },
})
export default class IndexPage extends Vue {
  user!: UserType
  mounted() {
    this.$store.dispatch('profile/GET_USER_BY_ID', this.$route.params.id)
  }
}
</script>
