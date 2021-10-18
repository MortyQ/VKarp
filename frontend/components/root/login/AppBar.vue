<template>
  <v-container
    class="d-flex justify-center align-center"
    style="position: relative"
  >
    <v-img
      max-height="35"
      max-width="35"
      src="/vklogo.png"
      style="position: absolute; left: 10%; border-radius: 5px"
    >
    </v-img>

    <v-btn text v-if="steps === 1" @click="goToHome()"> sign Out </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
@Component({
  layout: 'login',
  computed: { ...mapState('register', ['steps']) },
})
export default class AppBar extends Vue {
  steps!: number

  goToHome() {
    this['$store'].dispatch('register/CHANGE_STEP_PAGE', 0)
  }
}
</script>
