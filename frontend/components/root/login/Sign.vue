<template>
  <v-card elevation="2" width="320px">
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
                :label="$t('login')"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|strongPassword">
              <v-text-field
                v-model="password"
                outlined
                :label="$t('password')"
                class="mt-2"
                hint="At least 8 characters"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </ValidationProvider>
            <div class="d-flex justify-space-between align-center">
              <v-btn
                class="mt-2"
                type="submit"
                style="background: #5181b8; color: white"
              >
                {{ $t('signIn') }}
              </v-btn>
              <v-btn text color="#2A5885" style="font-size: 11px">{{
                $t('forget')
              }}</v-btn>
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
