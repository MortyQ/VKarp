import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'

import axios from 'axios'

@Module({ name: 'register', stateFactory: true, namespaced: true })
export default class Register extends VuexModule {}
