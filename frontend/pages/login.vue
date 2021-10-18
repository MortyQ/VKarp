<template>
  <v-container>
    <v-row class="d-flex justify-center align-center" v-if="steps === 0">
      <v-col
        cols="6"
        class="d-flex flex-column justify-start align-end"
        style="height: 100vh"
      >
        <div
          class="d-flex flex-column justify-start align-center mr-15 mt-8"
          style="text-align: center; width: 55%"
        >
          <span class="font_vk_mobile_h1"> {{ $t('vk_mobile') }} </span>
          <span class="" style="font_vk_mobile_p mt-5">{{
            $t('vk_mobile_description')
          }}</span>
        </div>
        <div class="vk-image-positions">
          <v-img
            class="vk-image-positions-left"
            max-height="384"
            max-width="183"
            height="384"
            width="183"
            lazy-src="/phoneLeft.png"
            src="/phoneLeft.png"
          >
          </v-img>

          <v-img
            class="vk-image-positions-right"
            max-height="397"
            max-width="198"
            height="397"
            width="198"
            lazy-src="/phoneRight.png"
            src="/phoneRight.png"
          >
          </v-img>
        </div>
        <div class="vk-image-text">
          <span class="android">
            <v-btn text depressed>
              <v-icon small color="#2a5885" class="pb-1">mdi-android</v-icon> VK
              {{ $t('forWord') }} Android
            </v-btn>
          </span>
          <span class="iphone">
            <v-btn text depressed>
              <v-icon small class="pb-1" color="#2a5885">mdi-apple</v-icon> VK
              <span> {{ $t('forWord') }} iOS</span>
            </v-btn>
          </span>
          <br />
          <span class="all_product">
            <v-btn text depressed>
              {{ $t('allProduct') }}
              <v-icon small style="padding-top: 1px" color="#2a5885"
                >mdi-chevron-right</v-icon
              >
            </v-btn>
          </span>
        </div>
      </v-col>
      <v-col cols="6" style="height: 100vh">
        <SignIn />
        <StepOne />

        <v-card class="mt-3" width="100%" min-width="320px" max-width="320px">
          <v-card-text style="text-align: center">
            {{ $t('learnMoreRegister') }}
            <v-card tile flat color="white" :ripple="false" to="/login">
              <span style="color: #2a5885"> {{ $t('learnMoreWord') }} </span>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="steps === 1" class="d-flex justify-center align-center">
      <StepTwo />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignIn from '@/components/root/login/Sign.vue'
import StepOne from '@/components/root/login/register/StepOne.vue'
import StepTwo from '../components/root/login/register/StepTwo.vue'
@Component({
  layout: 'login',
  components: { SignIn, StepOne, StepTwo },
})
export default class Login extends Vue {
  public steps: number = 1
}
</script>
