import { ActionTree, Module } from 'vuex';
import { PlatformBackend } from '@/models/PlatformBackend';
import LandingService from '@/services/landing_service';
import { AxiosResponse } from 'axios';

export interface GlobalState {
  language: string,
  token: string,
  isLoading: boolean,
}

export interface GlobalActions extends ActionTree<any, GlobalState> {
  getDefaultLanguage: void,
}

export interface GlobalMutations {
}

export interface GlobalGetters {
}

const initialState = (): GlobalState => ({ language: 'en-US', token: '', isLoading: false });

const actions: GlobalActions = {
  getDefaultLanguage({ commit }): void {
    commit('SET_LOADING', true);
    LandingService.getCurrentLanguage().then((response: AxiosResponse) => {
      commit('SET_LANGUAGE', response.data);
    }).finally(() => {
      commit('SET_LOADING', false);
    });
  },
};

const mutations = {
  SET_LOADING(state: GlobalState, value: boolean) {
    state.isLoading = value;
  },
  SET_LANGUAGE(state: GlobalState, value: { code: string, name: string }) {
    state.language = value.code;
  },
};

const getters: GlobalGetters = {};

const globalStore = (): Module<GlobalState, any> => ({
  namespaced: true,
  state: initialState(),
  actions,
  getters,
  mutations,
});

export default initialState;
