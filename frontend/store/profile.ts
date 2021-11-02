import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'

import axios from 'axios'
import $axios from '@nuxtjs/axios'
import qs from 'qs'

import { UserType, Post } from '@/helpers/userType'

@Module({ name: 'mainPage', stateFactory: true, namespaced: true })
export default class MainPage extends VuexModule {
  public user: UserType | null = null
  public users: UserType[] | null = null
  public posts: Post[] | Post | null = null
  userGallery: File[] | null = null

  @Mutation
  private _GET_USER_BY_ID(payload) {
    this.user = payload
  }

  @Action({ commit: '_GET_USER_BY_ID' })
  public async GET_USER_BY_ID(id) {
    try {
      const res = await axios.get(`http://localhost:1337/users/${id}/`)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _EDIT_PROFILE(newInfo: UserType) {
    this.user = newInfo
    console.log(this.user)
  }
  @Action({ commit: '_EDIT_PROFILE' })
  public async EDIT_PROFILE(newInfo: UserType) {
    try {
      let { data } = await axios.put(
        `http://localhost:1337/users/${newInfo.id}`,
        newInfo
      )

      return data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _UPDATE_USER(payload) {
    console.log(payload)
    if (payload) {
      this.user = payload
    }
  }

  @Action({ commit: '_UPDATE_USER' })
  public async UPDATE_AVATAR(payload) {
    console.log(payload)

    try {
      let resp = await axios.post(
        `http://localhost:1337/upload`,
        payload.formdata
      )
      console.log('resp', resp)
      if (resp.data) {
        let { data } = await axios.put(
          `http://localhost:1337/users/${payload.id}`,
          {
            avatar: {
              id: resp.data[0].id,
            },
          }
        )
        return data
      }
      return null
    } catch (e) {
      return null
      console.log(e)
    }
  }

  @Mutation
  private _ADD_PHOTO_TO_GALLERY(payload) {
    console.log(payload)
    if (payload) {
      this.user = {
        ...this.user,
        gallery: [payload, this.user?.gallery],
      }
    }
  }

  @Action({ commit: '_ADD_PHOTO_TO_GALLERY', rawError: true })
  public async ADD_PHOTO_TO_GALLERY(payload) {
    try {
      let resp = await axios.post(
        `http://localhost:1337/upload`,
        payload.formdata
      )
      let { data } = await axios.put(
        `http://localhost:1337/users/${payload.id}`,
        {
          gallery: [
            ...this.context.state.user.gallery,
            { id: resp.data[0].id },
          ],
        }
      )
      return await undefined
    } catch (e) {
      console.log(e)
      return null
    }
  }

  @Mutation
  private _CREATE_POST(payload) {
    console.log(payload)
    if (payload && this.user) {
      this.user = {
        ...this.user,
        posts: [payload, ...this.user.posts],
      }
      console.log(this.user)
    }
  }

  @Action({ commit: '_CREATE_POST' })
  public async CREATE_POST(payload) {
    let url = 'http://localhost:1337/posts'
    let token = localStorage.getItem('jwt')

    // this['axios'].setHeader('Authorization', token)

    try {
      let { data } = await axios.post(
        `http://localhost:1337/posts`,
        {
          user: payload.user,
          post: payload.post,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _SEARCH_USER_BY_FIRST_NAME(payload) {
    this.users = payload
  }

  @Action({ commit: '_SEARCH_USER_BY_FIRST_NAME' })
  public async SEARCH_USER_BY_FIRST_NAME(payload: string) {
    try {
      let res = await axios.get(
        `http://localhost:1337/users?firstName_contains=${payload}`
      )
      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _TAKE_POST_BY_USER(payload) {
    if (payload) {
      this.posts = payload
    }
  }

  @Action({ commit: '_TAKE_POST_BY_USER' })
  public async TAKE_POST_BY_USER(payload) {
    const query = qs.stringify({
      _where: [{ user: payload.id }],
    })
    try {
      let res = await axios.get(
        `http://localhost:1337/posts?${query}&_start=0&_limit=${payload.limit}`
      )

      return res.data
    } catch (e) {
      console.log(e)
    }
  }
}
