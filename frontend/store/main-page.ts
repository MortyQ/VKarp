import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction,
} from 'vuex-module-decorators'

import axios from 'axios'
import { StepsPage } from '@/helpers/enum'

@Module({ name: 'mainPage', stateFactory: true, namespaced: true })
export default class MainPage extends VuexModule {}
