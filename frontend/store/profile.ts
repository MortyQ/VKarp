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
      // console.log(res.data)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _EDIT_PROFILE(newInfo: UserType) {
    this.user = newInfo
  }
  @Action({ commit: '_EDIT_PROFILE' })
  public async EDIT_PROFILE(newInfo: UserType) {
    try {
      let { data } = await axios.put(
        `http://localhost:1337/users/${newInfo.id}`,
        newInfo
      )
      console.log(newInfo)
      console.log(data)
      // console.log(this.user)

      return data
    } catch (e) {
      console.log(e)
    }
  }
}
