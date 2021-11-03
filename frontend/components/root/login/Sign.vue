<template>
  <v-card elevation="2" width="320px">
    <v-row
      cols="12"
      class="d-flex flex-column justify-center align-center mt-5"
    >
      <v-col cols="10" class="pt-5 pt-5 pb-5 mt-2">
        <v-alert
          v-if="errorLogin"
          color="red"
          outlined
          prominent
          shaped
          text
          type="success"
        >
          Не правильный логин или пароль</v-alert
        >

        <ValidationObserver ref="form" v-slot="{ valid: formValid }">
          <v-form @submit.prevent="signIn">
            <ValidationProvider rules="required">
              <v-text-field
                v-model="identifier"
                outlined
                placeholder="Ваш Логин"
                solo
                class="input-setting"
                label="Ваш Логин"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|strongPassword">
              <v-text-field
                v-model="password"
                outlined
                placeholder="Пароль"
                solo
                type="password"
                label="Пароль"
                class="mt-2"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </ValidationProvider>
            <div class="d-flex justify-space-between align-center">
              <v-btn
                class="mt-2 btn_sign"
                type="submit"
                :disabled="!formValid"
                :loading="loading"
              >
                Войти
              </v-btn>
              <nuxt-link to="/login" class="pt-3 forget_password"
                >Забыл пароль ?</nuxt-link
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
  computed: {
    ...mapState('register', ['steps']),
  },
})
export default class SignIn extends Vue {
  identifier: string | null = ''
  password: string | null = ''
  steps!: number
  errorLogin: boolean = false

  showPassword: boolean = false
  loading: boolean = false
  public async signIn() {
    this.loading = true
    try {
      const { user } = await this['$store'].dispatch('register/LOGIN', {
        identifier: this.identifier,
        password: this.password,
      })
      console.log('user', user)

      if (user && user.id) {
        this['$router'].push(`/${user.id}`)
      }
      this.loading = false
      this['$store'].dispatch('register/CHANGE_STEP_PAGE', 2)
    } catch (e) {
      this.errorLogin = true
      console.log(e)
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
