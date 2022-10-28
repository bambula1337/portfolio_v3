import { SET_STAGES } from '@/store/mutation-types';

type StagesCard = {
  id: number;
  main: string;
  sub: string;
};

interface State {
  stages: StagesCard[];
}

export const initialState: State = {
  stages: [],
};

export const mutations = {
  [SET_STAGES](state: State, stages: StagesCard[]): void {
    state.stages = stages;
  },
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
};
