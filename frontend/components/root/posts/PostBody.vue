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
      v-if="posts.length != 0"
    >
      <v-tabs-items class="mt-8" v-model="tab" style="width: 80% !important">
        <v-tab-item v-for="item in 2" :key="item.id">
          <v-card flat v-if="item === 1" item>
            <!-- <v-row v-if="posts" :key="item.id">
              <v-col cols="12" v-for="item in posts" :key="item.id">
                <v-card class="mt-3" flat :key="item.id">
                  <PostMain
                    :post="item.post"
                    :time="item.created_at"
                    :id="item.user"
                  />
                </v-card>
              </v-col>
            </v-row> -->
            <v-row cols="10" class="pa-6 ma-5" style="border: 3px solid black">
              <v-card flat tile>
                <v-row>
                  <v-col
                    cols="12"
                    v-for="(title, index) in titles"
                    :key="index"
                  >
                    <v-card tile flat>
                      <v-row>
                        <span class="ml-8"> </span>
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
            <!-- <v-row>
              <v-col cols="12">
                <v-card-title> Нету постов </v-card-title>
              </v-col>
            </v-row> -->
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
    <infinite-loading
      spinner="spiral"
      @infinite="infiniteScroll"
    ></infinite-loading>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import PostMain from './PostsMain.vue'
import trottle from '@/helpers/trottle'
import { mapState } from 'vuex'
import qs from 'qs'
import { UserType, Post } from '~/helpers/userType'
import func from '~/vue-temp/vue-editor-bridge'

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
  page = 1

  get url() {
    const query = qs.stringify({
      _where: [{ user: this.$route.params.id }],
    })
    return `http://localhost:1337/posts?${query}&_limit=` + this.page
  }

  // created() {
  //   this.fetchData()
  // }
  public async fetchData() {
    const resp = await this.$axios.get(this.url)
    console.log('resp', resp)

    this.titles = resp.data
    console.log('titles(items)', this.titles)
  }

  public infiniteScroll($state) {
    setTimeout(() => {
      this.page++
      this.$axios
        .get(this.url)
        .then((response) => {
          if (
            response.data.length > 1 &&
            response.data.length <= this.posts.length
          ) {
            response.data.forEach((i, index, array) => {
              if (index === array.length - 1) {
                // this.titles.push(item)
                console.log('array', array)
                console.log('index', index)
                this.titles.push(i)
              } else if (index === response.data.length) {
                console.log('end')
              }
            })
            console.log(response.data)

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

  // get trottledSave() {
  //   let DELAY = 1000
  //   return trottle(this.onScroll, DELAY)
  // }

  // public onScroll(e) {
  //   this.offsetTop = e.target.scrollTop
  //   console.log(this.offsetTop)
  //   if (this.offsetTop > 30 && this.offsetTop < 40) {
  //     console.log('max-5')

  //     this.customPagin = 5
  //     this.$store.dispatch('profile/TAKE_POST_BY_USER', {
  //       id: this.$route.params.id,
  //       limit: this.customPagin,
  //     })
  //   } else if (this.offsetTop > 250 && this.offsetTop < 300) {
  //     console.log('max-10')

  //     this.customPagin = 10
  //     this.$store.dispatch('profile/TAKE_POST_BY_USER', {
  //       id: this.$route.params.id,
  //       limit: this.customPagin,
  //     })
  //   } else if (this.offsetTop > 900 && this.offsetTop < 1000) {
  //     console.log('max-30')

  //     this.customPagin = 30
  //     this.$store.dispatch('profile/TAKE_POST_BY_USER', {
  //       id: this.$route.params.id,
  //       limit: this.customPagin,
  //     })
  //   }
  // }

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
