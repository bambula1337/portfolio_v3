import axios from 'axios';
import { SET_SOCIAL } from '@/store/mutation-types';
import { SocialLink } from '../types/home/social-link';

type Social = SocialLink[];

interface State {
  social: Social;
}

export const initialState: State = {
  social: [],
};

export const mutations = {
  [SET_SOCIAL](state: State, social: Social): void {
    state.social = social;
  },
};

export const actions = {
  async getSocial(context: any) {
    try {
      const request = await axios.get('http://localhost:3000/links');
      context.commit(SET_SOCIAL, request.data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  social(state: State) {
    return state.social;
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
};
