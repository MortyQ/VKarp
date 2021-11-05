<template>
  <v-row class="d-flex step_two_component-right">
    <ValidationObserver ref="form" v-slot="{ valid: formValid }">
      <v-col
        cols="12"
        class="d-flex flex-column justify-start align-center text_center"
      >
        <span class="title_text mt-5 font-size-20">
          Подтверждение регистрации
        </span>
        <span class="mt-5 mb-10 step_two_phone-number">
          Номер вашего телефона будет использоваться для входа в аккаунт
        </span>

        <ValidationProvider
          rules="required|phone"
          v-slot="{ errors }"
          mode="eager"
        >
          <VueTelInputVuetify
            hide-details="AAAAA"
            class="secondStep_register-input mb-3 pa-2 phone_number_style"
            v-model="phone"
            :error-messages="errors"
            label="Страна/Регион"
            mode="international"
            outlined
            :input-options="{ showDialCode: true, tabIndex: 0 }"
            defaultCountry="Ukraine"
          ></VueTelInputVuetify>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <v-text-field
            class="secondStep_register-input mt-3 mb-3"
            v-model="username"
            required
            passive
            outlined
            :error-messages="errors"
            solo
            placeholder="Ваш Логин"
            label="Ваш Логин"
            type="required"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|customEmail">
          <v-text-field
            class="secondStep_register-input mt-3 mb-3"
            v-model="email"
            required
            passive
            :error-messages="
              emailError
                ? ['Введите валидный email существующей страны', ...errors]
                : errors
            "
            outlined
            solo
            placeholder="Ваша электронная почта"
            label="Ваша электронная почта"
            type="email"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required|strongPassword"
        >
          <v-text-field
            class="secondStep_register-input mt-3 mb-3"
            v-model="password"
            passive
            outlined
            solo
            :error-messages="errors"
            required
            placeholder="Ваш пароль"
            :type="showPassword ? 'text' : 'password'"
            label="Ваш пароль"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|confirmed:password"
        >
          <v-text-field
            class="secondStep_register-input mt-3 mb-3"
            v-model="confirmPassword"
            required
            placeholder="Повторите ваш пароль"
            type="password"
            label="Повторите ваш пароль"
            passive
            outlined
            :error-messages="errors"
            solo
            confirmed:password
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" class="d-flex flex-column justify-end align-center">
        <v-btn
          :disabled="!formValid || emailError"
          @click="register()"
          class="mb-5"
          height="35px"
          width="280px"
          color="#5181b8"
          :loading="loading"
          ><span class="font-white">Дальше</span></v-btn
        >
        <span class="step_two-policy-text"
          >Нажимая кнопку «Далее», вы принимаете
          <nuxt-link
            class="policy_register step_two-policy-text-link"
            to="/login"
          >
            <span>пользовательское соглашение</span>
          </nuxt-link>
          и
          <nuxt-link
            class="policy_register step_two-policy-text-link"
            to="/login"
          >
            <span>политику конфиденциальности.</span>
          </nuxt-link>
          .
        </span>
      </v-col>
    </ValidationObserver>
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
import { email } from 'vee-validate/dist/rules'
@Component({
  components: { ValidationObserver, ValidationProvider, VueTelInputVuetify },
  computed: { ...mapState('register', ['steps']) },
})
export default class PhoneNumber extends Vue {
  steps!: number
  phone: string = ''
  emailInternal: string = ''
  password: string = ''
  username: string = ''
  confirmPassword: string = ''
  showPassword: boolean = false
  loading: boolean = false
  emailError: boolean = false

  get email(): string {
    return this.emailInternal
  }
  set email(newValue: string) {
    if (newValue.includes('.ru')) {
      this.emailError = true
    } else this.emailError = false
    this.emailInternal = newValue
  }

  async register() {
    this.loading = true
    await this['$store'].dispatch('register/SECOND_STEP_REGISTER', {
      phoneNumber: this.phone,
      password: this.password,
      email: this.email,
      username: this.username,
    })
    await this['$store'].dispatch('register/REGISTER')
    await this['$store'].dispatch('register/CHANGE_STEP_PAGE', 0)
  }
}
</script>
