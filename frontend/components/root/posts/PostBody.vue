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
      v-if="user.posts.length != 0"
    >
      <v-tabs-items class="mt-8" v-model="tab" style="width: 80% !important">
        <v-tab-item v-for="item in 2" :key="item.id">
          <v-card flat v-if="item === 1" item>
            <v-row v-if="user.posts" :key="item.id">
              <v-col cols="12" v-for="item in user.posts" :key="item.id">
                <v-card class="mt-3" flat>
                  <PostMain :post="item.post" :time="item.created_at" />
                </v-card>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="12">
                <v-card-title> Нету постов </v-card-title>
              </v-col>
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
    </v-row>
    <v-row v-else class="mt-4">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1>НЭМА ПОСТОВ</h1>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import PostMain from './PostsMain.vue'
import { mapState } from 'vuex'
import { UserType } from '~/helpers/userType'

@Component({
  components: { PostMain },
  computed: { ...mapState('profile', ['user']) },
})
export default class PostComponent extends Vue {
  user!: UserType
  public tab: null = null
  public tabs = ['Все записи', 'Мои записи']
}
</script>
