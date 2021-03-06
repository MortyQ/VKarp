import Vue from 'vue'
import { extend } from 'vee-validate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import VeeValidate from 'vee-validate'
import {
  required,
  email,
  confirmed,
  numeric,
  alpha,
} from 'vee-validate/dist/rules'
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

extend('alpha', {
  ...alpha,
  message: 'Не может быть пробелов, символов и цифр ',
})

extend('required', {
  ...required,
  message: 'Обязательное поле ! Пожалуйста заполните его ',
})
extend('email', {
  ...email,
  message: 'Пожалуйста введите свою почту в формате почта@сервис.домен ',
})

extend('confirmed', {
  ...confirmed,
  message: 'Must be required ',
})

const customEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

extend('customEmail', {
  validate: (value: any) => customEmail.test(value),
  message: `Пожалуйста введите свою почту в формате почта@сервис.домен`,
})

const strongRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\-,._?])(?=.{8,})/

const mobile = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

extend('strongPassword', {
  validate: (value: any) => strongRegex.test(value),
  message:
    'The {_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (e.g. , . _ & ? etc.)',
})

extend('phone', {
  validate: (value: any) => mobile.test(value),
  message: `Пожалуйста введите действующий мобильный номер. Так вы сможете всегда иметь доступ к своему аккаунту`,
})
