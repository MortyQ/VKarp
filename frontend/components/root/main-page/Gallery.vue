<template>
  <v-card class="mt-5 pa-1">
    <div class="d-flex justify-space-between align-center">
      <span class="ml-3"
        >Мои фотографии <span style="color: #cccccc">51</span></span
      >
      <span class="mr-4" style="color: #cccccc">Показать на карте</span>
    </div>
    <v-row cols="10" class="mt-3 pa-0 ma-0">
      <v-col cols="3" v-for="item in photo" :key="item.id">
        <v-img height="100%" width="100%" :src="item.value"> </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

@Component({
  components: {},
  computed: { ...mapState('register', ['steps']) },
})
export default class Gallery extends Vue {
  photo = [
    { alt: 'error', value: '/alexboss.jpeg' },
    { alt: 'error', value: '/photo3.jpeg' },
    { alt: 'error', value: '/alexboss.jpeg' },
    { alt: 'error', value: '/photo222.jpeg' },
  ]
}
</script>
