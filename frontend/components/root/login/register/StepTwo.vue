<template>
  <v-row
    class="mt-10 d-flex justify-center align-center"
    cols="8"
    style="max-width: 740px; min-width: 740px; width: 100%"
  >
    <v-col
      cols="6"
      style="
        max-height: 663px;
        min-height: 663px;
        height: 100%;
        background: #f7f8fa;
      "
    >
      <ManyServices />
    </v-col>
    <v-col
      cols="6"
      style="
        max-height: 663px;
        min-height: 663px;
        height: 100%;
        background: white;
      "
    >
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
