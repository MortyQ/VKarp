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
    <div class="d-flex flex-column text_center">
      <span class="font_vk_mobile_h1 mt-5"> Впервые ВКонтакте? </span>
      <span class="font_vk_mobile_p mb-5"> Моментальная регистрация </span>
    </div>
    <v-row
      width="100%"
      min-width="320px"
      max-width="320px"
      cols="12"
      class="d-flex flex-column align-center"
    >
      <v-col cols="10">
        <ValidationObserver ref="form" v-slot="{ valid: formValid }">
          <v-form @submit.prevent="userLogin">
            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
              <v-text-field
                v-model="firstName"
                label="Ваше имя"
                passive
                :error-messages="errors"
                placeholder="Ваше имя"
                solo
                outlined
                class="mb-2"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
              <v-text-field
                v-model="lastName"
                label="Ваша фамилия"
                passive
                :error-messages="errors"
                placeholder="Ваша фамилия"
                solo
                outlined
              ></v-text-field>
            </ValidationProvider>
            <span>
              <i class="mr-2 font_vk_mobile_p">Дата рождения</i>
              <v-tooltip right max-width="300px" color="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="black"
                    text
                    class="pa-1 font_vk_mobile_p register_info_btn"
                    height="20px"
                    width="100%"
                    min-width="20px"
                    max-width="20px"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span class="font_vk_mobile_p"> ? </span>
                  </v-btn>
                </template>
                <span class="text_black"
                  ><b>Заполненная дата рождения</b> позволит друзьям легче найти
                  вас, а также подбирать для вас интересные материалы.<br />Вы
                  сможете всегда настроить видимость вашей даты рождения в
                  редактировании профиля.</span
                >
              </v-tooltip>
            </span>
            <v-row cols="12">
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <ValidationProvider v-slot="{ errors }" rules="required">
                      <v-text-field
                        :error-messages="errors"
                        v-model="date"
                        passive
                        outlined
                        label="Дата рождения"
                        prepend-icon="mdi-calendar"
                        readonly
                        solo
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </ValidationProvider>
                  </template>

                  <v-date-picker
                    v-model="date"
                    :active-picker.sync="activePicker"
                    :max="MaxDate"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" class="pt-0 pb-0">
                <span class="font_vk_mobile_p">Пол </span>
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <v-radio-group
                    v-model="sex"
                    :error-messages="errors"
                    row
                    passive
                    class="pa-0 ma-0"
                    @keyup.enter="submit(formValid)"
                  >
                    <v-radio
                      label="Женский"
                      :ripple="false"
                      value="Женский"
                      passive
                    ></v-radio>
                    <v-radio
                      label="Мужской"
                      :ripple="false"
                      value="Мужской"
                      passive
                      small
                      class="mb-0 ml-2"
                    ></v-radio>
                  </v-radio-group>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <v-btn
                  width="262"
                  color="#4Bb34B"
                  class="mb-4"
                  height="38"
                  depressed
                  :disabled="!formValid"
                  @click="firstStep()"
                >
                  <span class="sign_next_step"> Продолжить регистрацию </span>
                </v-btn>
                <v-btn width="262" height="38" color="#1b6dd1" depressed>
                  <span class="sign_next_step"> Войти через Facebook </span>
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
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import {
  localeChanged,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: { ...mapState('register', ['steps']) },
})
export default class StepOne extends Vue {
  firstName: string = ''
  lastName: string = ''
  sex: string = ''
  row: any = null
  steps!: number
  menu: boolean = false
  date: string | null = null

  activePicker: string | null = null

  @Watch('menu')
  WatchMeny(val) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
  }
  save(date) {
    this.date = date
    this.menu = false
  }

  get MaxDate() {
    let date = new Date()
    date.setDate(date.getDate() - 6575)
    let max = this.$dayjs(date).format('YYYY-MM-DD')
    return max
  }

  public async firstStep() {
    await this['$store'].dispatch('register/CHANGE_STEP_PAGE', 1)
    await this['$store'].dispatch('register/FIRST_STEP_REGISTER', {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.date,
      sex: this.sex,
    })
  }
}
</script>
