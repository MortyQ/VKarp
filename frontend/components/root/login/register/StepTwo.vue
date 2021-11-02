<template>
  <v-row
    class="mt-10 d-flex justify-center align-center step_two_component"
    cols="8"
  >
    <v-col cols="6" class="step_two_component-left">
      <ManyServices />
    </v-col>
    <v-col cols="6" class="step_two_component-right">
      <v-card flat tile>
        <PhoneNumber />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ManyServices from './steptwo/ManyServices.vue'
import PhoneNumber from './steptwo/PhoneNumber.vue'

@Component({
  components: {
    ManyServices,
    PhoneNumber,
  },
})
export default class StepTwo extends Vue {}
</script>
