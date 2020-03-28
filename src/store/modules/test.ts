import { User } from '@/interfaces'
import { ActionContext, GetterHandler } from '../store-type'

const state = {
  users: [] as User[],
  isCached: true,
}

type StateType = typeof state

const getters = {
  getUsers(state: StateType): User[] {
    return state.users
  },
  getAgeCount(state: StateType): number {
    return state.users.reduce((prev, curr) => prev + curr.age, 0)
  },
  getIsCached(state: StateType): boolean {
    return state.isCached
  },
}

const mutations = {
  reset(state: StateType): void {
    state.users = []
    state.isCached = true
  },

  setUsers(state: StateType, users: User[]): void {
    state.users = users
  },

  setIsCached(state: StateType, isCached: boolean): void {
    state.isCached = isCached
  },
}

type GettersType = GetterHandler<typeof getters>
type UserContext = ActionContext<StateType, GettersType>

const actions = {
  updateState({ commit }: UserContext, payload: StateType) {
    commit('setUsers', payload.users)
    commit('setIsCached', payload.isCached)
  },
}

export const test = {
  state,
  getters,
  mutations,
  actions,
}
