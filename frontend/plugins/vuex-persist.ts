import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // @ts-ignore
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'vuex',
    }).plugin(store)
  })
}
