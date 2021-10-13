import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Register from '@/store/register'

export interface AppSuperstore {
  register: Register
}
export const strict = false
export let register!: Register

function initialiseStores(store: Store<AppSuperstore>): void {
  register = getModule(Register, store)
}

const initializer = (store: Store<AppSuperstore>) => initialiseStores(store)
export const plugins = [initializer]
