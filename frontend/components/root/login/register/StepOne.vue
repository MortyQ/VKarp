<template>
  <v-card class="mt-10">
    <div class="d-flex flex-column pt-10" style="text-align: center">
      <span class="font_vk_mobile_h1"> First time here? </span>
      <span class="font_vk_mobile_p"> Sign up for VK </span>
    </div>
    <v-row
      cols="12"
      class="d-flex flex-column justify-center align-center mt-5"
    >
      <v-col cols="10">
        <ValidationObserver ref="form">
          <v-form @submit.prevent="userLogin">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="firstName"
                :error-messages="errors"
                :label="`First Name`"
                passive
                outlined
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="lastName"
                :error-messages="errors"
                :label="`Last Name`"
                passive
                outlined
              ></v-text-field>
            </ValidationProvider>
            <span>
              <i class="mr-2 font_vk_mobile_p">Birthday</i>
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
                <span style="color: black"
                  ><b>By providing your birthday</b>, your friends will be able
                  to find you more easily and help us select interesting content
                  to recommend to you.<br />You can edit your profile to manage
                  who can view your birthday.</span
                >
              </v-tooltip>
            </span>
            <v-row cols="12" class="mt-2">
              <v-col cols="12">
                <v-menu
                  ref="dobMenu"
                  v-model="dobDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      name="date of birth"
                      :rules="{ required: true }"
                      :debounce="250"
                    >
                      <v-text-field
                        label="Date of birth"
                        readonly
                        outlined
                        :value="dobDateDisplay"
                        :error-messages="errors"
                        :success="valid"
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </ValidationProvider>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="dateOfBirthString"
                    locale="en-gb"
                    :max="new Date().toISOString().substr(0, 10)"
                    :first-day-of-week="1"
                    min="1920-01-01"
                    no-title
                    @input="dobDateMenu = false"
                  ></v-date-picker>
                </v-menu>
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

  dateOfBirthString: string = ''
  dobDateMenu = false

  get dobDateDisplay(): string {
    if (!this.dateOfBirthString) {
      return ''
    }
    return this['$dayjs'](this.dateOfBirthString).format('DD/MM/YYYY')
  }
}
</script>
