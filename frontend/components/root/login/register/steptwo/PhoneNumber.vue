<template>
  <v-row
    class="d-flex"
    style="min-height: 633px; max-height: 633px; height: 100%"
  >
    <v-col
      cols="12"
      class="d-flex flex-column justify-start align-center"
      style="text-align: center"
    >
      <span class="h2 mt-5" style="font-size: 20px">
        {{ $t('textRightTitle') }}
      </span>
      <span
        class="mt-5 mb-10"
        style="max-width: 60%; color: #656565; font-size: 14px"
      >
        {{ $t('textRightText') }}
      </span>

      <ValidationObserver>
        <ValidationProvider rules="required|phone" v-slot="{ errors }">
          <span style="color: red">{{ errors[0] }}</span>
          <VueTelInputVuetify
            v-model="phone"
            passive
            :label="$t('textRightLabelCountry')"
            solo
            :disabledFetchingCountry="true"
            outline
            :input-options="{ showDialCode: true, tabIndex: 0 }"
            defaultCountry="Ukraine"
          ></VueTelInputVuetify>
        </ValidationProvider>
        <!-- <v-select
        solo
        :label="$t('textRightLabelCountry')"
        :placeholder="$t('textRightLabelCountry')"
        outlined
      ></v-select> -->
      </ValidationObserver>
    </v-col>
    <v-col cols="12" class="d-flex flex-column justify-end align-center">
      <v-btn class="mb-5" height="35px" width="280px" color="#5181b8"
        ><span style="color: white">Next</span></v-btn
      >
      <span
        style="
          font-size: 13px;
          color: #939393;
          max-width: 70%;
          text-align: center;
        "
        >By clicking Next, you accept our
        <nuxt-link
          class="policy_register"
          to="/login"
          style="color: #939393; font-size: 13px"
        >
          <span>User Agreement</span>
        </nuxt-link>
        and
        <nuxt-link
          class="policy_register"
          to="/login"
          style="color: #939393; font-size: 13px"
        >
          <span>Privacy Policy</span>
        </nuxt-link>
        .
      </span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { VueTelInputVuetify } from 'vue-tel-input-vuetify/lib/plugin'

import { mapState } from 'vuex'
import {
  localeChanged,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
@Component({
  components: { ValidationObserver, ValidationProvider, VueTelInputVuetify },
  computed: {},
})
export default class PhoneNumber extends Vue {
  phone = ''

  test() {
    console.log(this.phone)
  }
}
</script>
