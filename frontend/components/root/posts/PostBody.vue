<template>
  <v-card class="mt-4 pa-5">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in tabs" :key="item.id">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-row
      cols="12"
      class="d-flex justify-center align-center"
      v-if="posts && user && sortDate"
    >
      <v-tabs-items class="mt-8" v-model="tab">
        <v-tab-item v-for="item in 2" :key="item.id">
          <v-card flat v-if="item === 1">
            <v-row cols="10" class="pa-4 ml-3 mt-2">
              <v-card flat tile>
                <v-row>
                  <v-col cols="12" v-for="title in sortDate" :key="title.id">
                    <v-card elevation="4" class="pa-4">
                      <v-row>
                        <v-col cols="2">
                          <v-img
                            height="100%"
                            width="100%"
                            max-height="50px"
                            max-width="50px"
                            min-height="50px"
                            min-width="50px"
                            lazy-src="/default-image.jpeg"
                            src="/vklogo.png"
                            class="border_50"
                          >
                          </v-img>
                        </v-col>
                        <v-col cols="6" class="ml-2">
                          Новый пост
                          <span class="d-flex post_time_message">
                            добавлен:
                            {{
                              $dayjs(title.created_at).format(
                                'YYYY-MM-DD в h:mm'
                              )
                            }}
                          </span>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          {{ title.post }}
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-col cols="12"> </v-col>
    </v-row>

    <v-row v-else class="mt-4">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1>НЭМА ПОСТОВ</h1>
      </v-col>
    </v-row>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll">
      <div slot="no-more">
        <v-btn @click="$vuetify.goTo(0)" icon :ripple="false">
          <v-icon large> mdi-arrow-up-bold-circle</v-icon>
        </v-btn>
      </div>
      <div slot="no-results">
        На данный момент нету больше постов !
      </div></infinite-loading
    >
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import PostMain from './PostsMain.vue'
import { mapState } from 'vuex'
import qs from 'qs'
import { UserType, Post } from '~/helpers/userType'

@Component({
  components: { PostMain },
  computed: {
    ...mapState('profile', ['user']),
    ...mapState('profile', ['posts']),
  },
})
export default class PostComponent extends Vue {
  user!: UserType
  posts!: Post[]
  offsetTop: number = 0
  customPagin: number = 3

  page = 5
  $route: any

  get sortDate() {
    if (this.posts && this.user.posts && this.user) {
      return this.posts.sort(function (a, b) {
        if (a.created_at > b.created_at) {
          return -1
        }
        if (a.created_at < b.created_at) {
          return 1
        }
        return 0
      })
    }
  }

  public async infiniteScroll($state) {
    this.page += 3
    const response = await this.$store.dispatch('profile/TAKE_POST_BY_USER', {
      id: this.$route.params.id,
      limit: this.page,
    })

    if (
      response &&
      this.posts &&
      response.length > 1 &&
      response.length <= this.posts.length
    ) {
      response.forEach((i, index, array) => {
        if (index === array.length - 1) {
          $state.loaded()
        } else if (this.page > array.length) {
          $state.complete()
        }
      })
      $state.loaded()
    } else {
      $state.complete()
    }
  }

  public tab: null = null
  public tabs = ['Все записи']

  mounted() {
    this.$store.dispatch('profile/TAKE_POST_BY_USER', {
      id: this.$route.params.id,
      limit: this.page,
    })
  }
}
</script>
