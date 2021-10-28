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
    <span
      v-if="steps === 3"
      class="title_text"
      style="position: absolute; left: 15%; border-radius: 5px"
      >Вконтакте</span
    >

    <div style="width: 200px">
      <v-text-field
        flat
        tile
        v-if="steps === 3"
        solo
        hide-details
        class="ma-0 pa-0"
        outlined
        style="position: absolute; left: 25%; top: -50%"
        background-color="#edeef0"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>

    <v-btn text v-if="steps === 1" @click="goToHome()"> sign Out </v-btn>

    <v-btn @click="logout()" text> Выйти </v-btn>
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

  logout() {
    this['$store'].dispatch('register/LOGOUT')
    this.$router.push('/login')
  }
}
</script>
