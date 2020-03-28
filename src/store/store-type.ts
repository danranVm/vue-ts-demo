import { GettersFuncMap, CommitFuncMap, DispatchFuncMap, State } from './module-type'

export type GetterHandler<T extends { [key: string]: (...args: any) => any }> = {
  [P in keyof T]: ReturnType<T[P]>
}
export type Getters = GetterHandler<GettersFuncMap>

export interface Commit {
  <T extends keyof CommitFuncMap>(type: T, payload?: Parameters<CommitFuncMap[T]>[1]): void
}

export interface Dispatch {
  <T extends keyof DispatchFuncMap>(type: T, payload?: Parameters<DispatchFuncMap[T]>[1]): Promise<any>
}

export interface Store {
  state: State
  getters: Getters
  commit: Commit
  dispatch: Dispatch
}

export interface ActionContext<S, G> {
  dispatch: Dispatch
  commit: Commit
  state: S
  getters: G
  rootState: State
  rootGetters: Getters
}
