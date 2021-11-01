<template>
  <v-card class="mt-4 pa-5" v-if="user.posts && posts">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in tabs" :key="item.id">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-row
      cols="12"
      class="d-flex justify-center align-center"
      v-if="posts.length"
    >
      <v-tabs-items class="mt-8" v-model="tab">
        <v-tab-item v-for="item in 2" :key="item.id">
          <v-card flat v-if="item === 1" item>
            <v-row cols="10" class="pa-4 ml-3 mt-2">
              <v-card flat tile>
                <v-row>
                  <v-col cols="12" v-for="title in titles" :key="title.id">
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
                            style="border-radius: 50%"
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

          <v-card flat v-if="item === 2" :key="item.id">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              rerum, laborum, possimus facere exercitationem repellat
              dignissimos praesentium consequuntur quos molestias iusto et
              impedit ducimus sequi?
            </span>
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
        <v-btn @click="$vuetify.goTo(0)"> =></v-btn>
      </div></infinite-loading
    >
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import PostMain from './PostsMain.vue'
import trottle from '@/helpers/trottle'
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
  posts!: Post[] | Post
  offsetTop: number = 0
  customPagin: number = 3

  titles = []
  page = 5

  get url() {
    const query = qs.stringify({
      _where: [{ user: this.$route.params.id }],
    })
    return `http://localhost:1337/posts?${query}&_start=0&_limit=${this.page}`
  }

  created() {
    this.fetchData()
  }

  public async fetchData() {
    const resp = await this.$axios.get(this.url)

    this.titles = resp.data
    console.log('titles(items)', this.titles)
  }

  public infiniteScroll($state) {
    setTimeout(() => {
      this.page += 5
      this.$axios
        .get(this.url)
        .then((response) => {
          if (
            response.data.length > 1 &&
            response.data.length <= this.posts.length
          ) {
            response.data.forEach((i, index, array) => {
              if (index === array.length - 1) {
                this.titles = array.reverse()
              } else if (this.page > array.length) {
                console.log('end')
                $state.complete()
              }
            })

            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }, 500)
  }

  public tab: null = null
  public tabs = ['Все записи', 'Мои записи']

  mounted() {
    this.$store.dispatch('profile/TAKE_POST_BY_USER', {
      id: this.$route.params.id,
      limit: this.customPagin,
    })
  }
}
</script>
