import Vue from 'vue'
import { extend } from 'vee-validate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, confirmed, numeric } from 'vee-validate/dist/rules'
import $t from '@nuxtjs/i18n'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('acceptTerms', {
  validate: (value: any) => value === true,
  params: ['continue'],
  message: 'You must agree to the {_field_} to {continue}',
})

extend('numeric', {
  ...numeric,
  message: 'Must be only intager',
})

extend('required', {
  ...required,
  message: 'Must be required ',
})
extend('email', {
  ...email,
  message: 'Must be required ',
})

extend('confirmed', {
  ...confirmed,
  message: 'Must be required ',
})

const strongRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\-,._?])(?=.{8,})/
const mobile = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

extend('strongPassword', {
  validate: (value: any) => strongRegex.test(value),
  message:
    'The {_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (e.g. , . _ & ? etc.)',
})

extend('phone', {
  validate: (value: any) => mobile.test(value),
  message: `Please entery normal Mobile phone number`,
})
