<template>
  <v-card elevation="2">
    <v-row
      cols="12"
      class="d-flex flex-column justify-center align-center mt-5"
    >
      <v-col cols="10" class="pt-5 pt-5 pb-5 mt-2">
        <ValidationObserver ref="form" v-slot="{ valid: formValid }">
          <v-form @submit.prevent="userLogin">
            <ValidationProvider rules="required">
              <v-text-field
                v-model="identifier"
                outlined
                class="input-setting"
                label="Enter your User Name"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|strongPassword">
              <v-text-field
                v-model="password"
                outlined
                label="Password"
                hint="At least 8 characters"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </ValidationProvider>
            <div class="d-flex justify-space-between align-center">
              <v-btn
                type="submit"
                style="background: #5181b8; color: white"
                :disabled="!formValid"
              >
                Sing In
              </v-btn>
              <v-btn text color="#2A5885" style="font-size: 11px"
                >forget the password ?</v-btn
              >
            </div>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import { mapState } from 'vuex'

@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: {},
})
export default class SignIn extends Vue {
  identifier: string | null = ''
  password: string | null = ''

  showPassword: boolean = false
  loading: boolean = false
  public async userLogin() {
    console.log('LOGIN')
  }
}
</script>
