<template>
  <v-row
    class="d-flex"
    style="min-height: 633px; max-height: 633px; height: 100%"
  >
    <ValidationObserver ref="form" v-slot="{ valid: formValid }">
      <v-col
        cols="12"
        class="d-flex flex-column justify-start align-center"
        style="text-align: center"
      >
        <span class="title_text mt-5" style="font-size: 20px">
          Подтверждение регистрации
        </span>
        <span
          class="mt-5 mb-10"
          style="max-width: 60%; color: #656565; font-size: 14px"
        >
          Номер вашего телефона будет использоваться для входа в аккаунт
        </span>

        <ValidationProvider rules="required|phone" v-slot="{ errors }">
          <VueTelInputVuetify
            class="secondStep_register-input mt-3 mb-3"
            v-model="phone"
            passive
            :error-messages="errors"
            label="Страна/Регион"
            solo
            :disabledFetchingCountry="true"
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
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <v-text-field
            class="secondStep_register-input mt-3 mb-3"
            v-model="email"
            required
            passive
            :error-messages="errors"
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
          :disabled="!formValid"
          @click="register()"
          class="mb-5"
          height="35px"
          width="280px"
          color="#5181b8"
          :loading="loading"
          ><span style="color: white">Дальше</span></v-btn
        >
        <span
          style="
            font-size: 13px;
            color: #939393;
            max-width: 70%;
            text-align: center;
          "
          >Нажимая кнопку «Далее», вы принимаете
          <nuxt-link
            class="policy_register"
            to="/login"
            style="color: #939393; font-size: 13px"
          >
            <span>пользовательское соглашение</span>
          </nuxt-link>
          и
          <nuxt-link
            class="policy_register"
            to="/login"
            style="color: #939393; font-size: 13px"
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
@Component({
  components: { ValidationObserver, ValidationProvider, VueTelInputVuetify },
  computed: {},
})
export default class PhoneNumber extends Vue {
  phone: string = ''
  email: string = ''
  password: string = ''
  username: string = ''
  confirmPassword: string = ''
  showPassword: boolean = false
  loading: boolean = false

  async register() {
    this.loading = true
    await this['$store'].dispatch('register/SECOND_STEP_REGISTER', {
      phoneNumber: this.phone,
      password: this.password,
      email: this.email,
      username: this.username,
    })
    await this['$store'].dispatch('register/REGISTER')
  }
}
</script>
