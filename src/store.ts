import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type CounterState = {
  count: number
}

const state = {
  count: 0
}

const mutations = {
  inc(state: CounterState) {
    state.count++
  },
  dec(state: CounterState) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
