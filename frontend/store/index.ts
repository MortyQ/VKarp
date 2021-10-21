import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Register from '@/store/register'
import MainPage from './main-page'

export interface AppSuperstore {
  register: Register
  mainPage: MainPage
}

export let register!: Register
export let mainPage!: MainPage

function initialiseStores(store: Store<AppSuperstore>): void {
  register = getModule(Register, store)
  mainPage = getModule(MainPage, store)
}

const initializer = (store: Store<AppSuperstore>) => initialiseStores(store)
export const plugins = [initializer]
