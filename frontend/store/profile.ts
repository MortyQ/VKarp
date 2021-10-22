import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'

import axios from 'axios'
import { UserType } from '@/helpers/userType'

@Module({ name: 'mainPage', stateFactory: true, namespaced: true })
export default class MainPage extends VuexModule {
  public user: UserType | null = null

  @Mutation
  private _GET_USER_BY_ID(payload) {
    this.user = payload
  }

  @Action({ commit: '_GET_USER_BY_ID' })
  public async GET_USER_BY_ID(id) {
    try {
      const res = await axios.get(`http://localhost:1337/users/${id}/`)
      console.log(res.data)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }
}
