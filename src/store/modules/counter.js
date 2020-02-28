import * as types from '../types';
const state = {
  counter: 0,
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter+ " Clicks";
  },
};

const mutations = {
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload;
  },
  [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
    state.counter -= payload;
  },
};
const actions = {
  [types.COUNTER_INCREMENT]: ({commit}, payload) => {
    commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
  },
  [types.COUNTER_DECREMENT]: ({commit}, payload) => {
    commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
  },
  [types.COUNTER_INCREMENT_ASYNC]: ({commit}, {by, duration}) => {
    setTimeout(() => {
      commit(types.MUTATE_INCREMENT_COUNTER, by);
    }, duration)
  },
  [types.COUNTER_DECREMENT_ASYNC]: ({commit}, {by, duration}) => {
    setTimeout(() => {
      commit(types.MUTATE_DECREMENT_COUNTER, by);
    }, duration)
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
