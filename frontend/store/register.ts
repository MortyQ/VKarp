import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
  config,
} from 'vuex-module-decorators'

import axios from 'axios'
import { StepsPage } from '@/helpers/enum'
import { RegisterType, LoginSignIn } from '@/helpers/loginType'

config.rawError = true

@Module({ name: 'register', stateFactory: true, namespaced: true })
export default class Register extends VuexModule {
  public steps: 0 | 1 | 2 = 0
  public registerInfo: RegisterType | null = null
  signUser: LoginSignIn | null = null
  jwt: string | null = null

  @Mutation
  private _CHANGE_STEP_PAGE(payload: 0 | 1) {
    this.steps = payload
  }
  @Action({ commit: '_CHANGE_STEP_PAGE', rawError: true })
  public CHANGE_STEP_PAGE(payload: 0 | 1): 0 | 1 {
    return payload
  }

  @Mutation
  private _FIRST_STEP_REGISTER(payload: RegisterType) {
    this.registerInfo = payload
  }

  @Action({ commit: '_FIRST_STEP_REGISTER' })
  public FIRST_STEP_REGISTER(payload: RegisterType) {
    return payload
  }

  @Mutation
  private _SECOND_STEP_REGISTER(payload: RegisterType) {
    if (!this.registerInfo) return
    this.registerInfo.phoneNumber = payload.phoneNumber
    this.registerInfo.password = payload.password
    this.registerInfo.email = payload.email
    this.registerInfo.username = payload.username
    console.log(this.registerInfo)
    // this.registerInfo.phoneNumber = payload
  }

  @Action({ commit: '_SECOND_STEP_REGISTER' })
  public SECOND_STEP_REGISTER(payload: {}) {
    return payload
  }

  @Action
  public async REGISTER() {
    try {
      const { data } = await axios.post(
        'http://localhost:1337/auth/local/register',
        this.registerInfo
      )
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _LOGIN(payload) {
    this.signUser = payload.user
    this.jwt = payload.jwt
  }

  @Action({ commit: '_LOGIN' })
  public async LOGIN(login: LoginSignIn) {
    try {
      const res = await axios.post('http://localhost:1337/auth/local/', login)
      localStorage.setItem('jwt', `${res?.data?.jwt}`)
      console.log(res.data)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @MutationAction({ mutate: ['signUser', 'jwt'] })
  public async LOGOUT() {
    localStorage.removeItem('jwt')
    return {
      signUser: null,
      jwt: null,
    }
  }
}
