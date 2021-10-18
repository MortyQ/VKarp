import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'

import axios from 'axios'
import { StepsPage } from '@/helpers/enum'

@Module({ name: 'register', stateFactory: true, namespaced: true })
export default class Register extends VuexModule {
  public steps: 0 | 1 = 0

  @Mutation
  private _CHANGE_STEP_PAGE(payload: 0 | 1) {
    console.log('MUTATOR')
    this.steps = payload
  }
  @Action({ commit: '_CHANGE_STEP_PAGE', rawError: true })
  public CHANGE_STEP_PAGE(payload: 0 | 1): 0 | 1 {
    return payload
  }
}
