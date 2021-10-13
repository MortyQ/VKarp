<template>
  <v-card
    class="mt-10"
    height="100%"
    min-height="457px"
    max-height="457px"
    width="100%"
    min-width="320px"
    max-width="320px"
  >
    <div class="d-flex flex-column" style="text-align: center">
      <span class="font_vk_mobile_h1 mt-5">
        {{ $t('titleFirstTimeHere') }}
      </span>
      <span class="font_vk_mobile_p mb-5"> {{ $t('SignUpForVK') }} </span>
    </div>
    <v-row
      width="100%"
      min-width="320px"
      max-width="320px"
      cols="12"
      class="d-flex flex-column justify-center align-center"
    >
      <v-col cols="10">
        <ValidationObserver ref="form">
          <v-form @submit.prevent="userLogin">
            <ValidationProvider rules="required">
              <v-text-field
                v-model="firstName"
                :label="$t('firstName')"
                passive
                outlined
                class="mb-2"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider rules="required">
              <v-text-field
                v-model="lastName"
                :label="$t('lastName')"
                passive
                outlined
                class="mb-2"
              ></v-text-field>
            </ValidationProvider>
            <span>
              <i class="mr-2 font_vk_mobile_p">{{ $t('birthday') }}</i>
              <v-tooltip right max-width="200px" color="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="black"
                    text
                    class="pa-1 font_vk_mobile_p"
                    height="20px"
                    width="100%"
                    min-width="20px"
                    max-width="20px"
                    style="border: 1px solid #626d7a; border-radius: 50%"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span class="font_vk_mobile_p"> ? </span>
                  </v-btn>
                </template>
                <span style="color: black">{{ $t('birthdayDescript') }}</span>
              </v-tooltip>
            </span>
            <v-row cols="12">
              <v-col cols="12" class="mt-2">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  outlined
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      {{ $t('cancel') }}
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" class="pt-0 pb-0">
                <span class="font_vk_mobile_p"> {{ $t('gender') }} </span>
                <v-radio-group v-model="row" row class="pa-0 ma-0">
                  <v-radio
                    :label="$t('female')"
                    :ripple="false"
                    value="Female"
                    v-model="sex"
                  ></v-radio>
                  <v-radio
                    :label="$t('male')"
                    :ripple="false"
                    value="Male"
                    v-model="sex"
                    small
                    class="mb-0 ml-2"
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-btn
                  width="262"
                  color="#4Bb34B"
                  class="mb-4"
                  height="38"
                  depressed
                >
                  <span style="color: white; font-size: 12px !important">
                    {{ $t('continRegister') }}
                  </span>
                </v-btn>
                <v-btn width="262" height="38" color="#1b6dd1" depressed>
                  <span style="color: white; font-size: 12px !important">
                    {{ $t('registerFacebook') }}
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import {
  localeChanged,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: {},
})
export default class StepOne extends Vue {
  firstName: string = ''
  lastName: string = ''
  sex: string = ''
  row: any = null

  menu: boolean = false

  date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10)
}
</script>
