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
            <span>Birthday</span>
            <v-row cols="12" class="d-flex justify-space-between mt-1">
              <v-col cols="4"
                ><v-select append-icon :items="items" label="Day" outlined>
                </v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="items" label="Month" outlined> </v-select
              ></v-col>
              <v-col cols="4">
                <v-select :items="items" label="Year" outlined></v-select
              ></v-col>
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
  items = ['1', '2']
}
</script>
