<template>
  <v-container>
    <v-row v-if="steps === 0">
      <v-col cols="8">
        <div
          class="d-flex flex-column justify-start align-center mt-4"
          style="text-align: center"
        >
          <span class="font_vk_mobile_h1"> {{ $t('vk_mobile') }} </span>
          <span class="mt-4" style="font_vk_mobile_p">{{
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
            <nuxt-link to="/login">
              <v-icon small color="#2a5885" class="pb-1">mdi-android</v-icon> VK
              {{ $t('forWord') }} Android
            </nuxt-link>
          </span>
          <span class="iphone">
            <nuxt-link to="/login">
              <v-icon small class="pb-1" color="#2a5885">mdi-apple</v-icon> VK
              {{ $t('forWord') }} iOS
            </nuxt-link></span
          >
          <br />
          <span class="all_product">
            <nuxt-link to="/login">
              {{ $t('allProduct') }}
              <v-icon small style="padding-top: 1px" color="#2a5885"
                >mdi-chevron-right</v-icon
              >
            </nuxt-link></span
          >
        </div>
      </v-col>
      <v-col cols="4">
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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignIn from '@/components/root/login/Sign.vue'
import StepOne from '@/components/root/login/register/StepOne.vue'
@Component({
  layout: 'login',
  components: { SignIn, StepOne },
  computed: {},
})
export default class Login extends Vue {
  public steps: number = 0
}
</script>
