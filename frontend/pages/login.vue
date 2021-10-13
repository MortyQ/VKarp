<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div
          class="d-flex flex-column justify-start align-center mt-4"
          style="text-align: center"
        >
          <span class="font_vk_mobile_h1"> VK for mobile devices </span>
          <span class="mt-4" style="font_vk_mobile_p"
            >Install our official mobile app and stay in touch with your friends
            anytime and anywhere.</span
          >
        </div>
        <div class="vk-image-positions">
          <v-img
            class="vk-image-positions-left"
            max-height="384"
            max-width="183"
            height="384"
            width="183"
            src="/phoneLeft.png"
          >
          </v-img>

          <v-img
            class="vk-image-positions-right"
            max-height="397"
            max-width="198"
            height="397"
            width="198"
            src="/phoneRight.png"
          >
          </v-img>
        </div>
        <div></div>
      </v-col>
      <v-col cols="4">
        <SignIn />
        <StepOne />

        <v-card class="mt-3" width="100%" min-width="320px" max-width="320px">
          <v-card-text style="text-align: center">
            After registering, you'll get access to all of VK Connect's
            features.
            <v-card tile flat color="white" :ripple="false" to="/login">
              <span style="color: #2a5885"> Learn more </span>
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
export default class Login extends Vue {}
</script>
