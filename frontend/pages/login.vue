<template>
  <v-card flat tile color="#edeef0" class="ma-0 pa-0">
    <v-row
      class="d-flex justify-center align-center"
      v-if="steps === 0"
      cols="12"
    >
      <v-col
        cols="6"
        lg="4"
        class="
          d-flex
          flex-column
          justify-center
          align-center
          login_images
          height_100
        "
      >
        <div
          class="
            d-flex
            flex-column
            justify-end
            align-end
            ml-15
            text_center
            width_60
          "
        >
          <span class="font_vk_mobile_h1 width_100">
            ВКонтакте для мобильных устройств
          </span>
          <span class="font_vk_mobile_p mt-5">
            Установите официальное мобильное приложение ВКонтакте и оставайтесь
            в курсе новостей ваших друзей, где бы вы ни находились.
          </span>
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
              для Android
            </v-btn>
          </span>
          <span class="iphone">
            <v-btn text depressed>
              <v-icon small class="pb-1" color="#2a5885">mdi-apple</v-icon> VK
              <span> для iOS</span>
            </v-btn>
          </span>
          <br />
          <span class="all_product">
            <v-btn text depressed>
              Все продукты
              <v-icon small color="#2a5885">mdi-chevron-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-col>
      <v-col cols="6" lg="4" class="height_100">
        <SignIn />
        <StepOne />

        <v-card
          class="mt-3 mb-3"
          width="100%"
          min-width="320px"
          max-width="320px"
        >
          <v-card-text class="text_center">
            После регистрации вы получите доступ ко всем возможностям VK ID
            <v-card tile flat color="white" :ripple="false" to="/login">
              <span class="forget_password"> Узнать больше </span>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="steps === 1" class="d-flex justify-center align-center">
      <StepTwo />
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignIn from '@/components/root/login/Sign.vue'
import StepOne from '@/components/root/login/register/StepOne.vue'
import StepTwo from '../components/root/login/register/StepTwo.vue'
import { mapState } from 'vuex'
@Component({
  layout: 'login',
  components: { SignIn, StepOne, StepTwo },
  computed: { ...mapState('register', ['steps']) },
})
export default class Login extends Vue {
  steps!: number
}
</script>
