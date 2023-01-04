import { SET_USER } from '@/store/mutation-types';
import { User } from '@/store/types/auth/user';

interface State {
  user: User;
}

export const initialState: State = {
  user: null,
};

export const mutations = {
  [SET_USER](state: State, user: User) {
    state.user = user;
  },
};

export const actions = {
  setUser(context: any, user: User) {
    context.commit('SET_USER', user);
  },
};

export const getters = {
  getUser(state: State) {
    return state.user;
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
};
