import { GettersFuncMap, MutationsFuncMap, ActionsFuncMap, State } from './module-type'

/** Getter类型转换 Handler：GettersFuncMap => Getters */
export type GetterHandler<T extends { [key: string]: (...args: any) => any }> = {
  [P in keyof T]: ReturnType<T[P]>
}
/** 根据 GettersFuncMap 得到的 Getters 类型*/
export type Getters = GetterHandler<GettersFuncMap>

/** 将 MutationsFuncMap 的 key,value 转换成 Commit 函数的两个参数: type, payload */
export interface Commit {
  <T extends keyof MutationsFuncMap>(type: T, payload?: Parameters<MutationsFuncMap[T]>[1]): void
}

/** 将 ActionsFuncMap 的 key,value 转换成 Dispatch 函数的两个参数: type, payload */
export interface Dispatch {
  <T extends keyof ActionsFuncMap>(type: T, payload?: Parameters<ActionsFuncMap[T]>[1]): Promise<any>
}

// 导出全局的 Store 类型
export interface Store {
  state: State
  getters: Getters
  commit: Commit
  dispatch: Dispatch
}

// 导出全局的 ActionContext 类型
export interface ActionContext<S, G> {
  dispatch: Dispatch
  commit: Commit
  state: S
  getters: G
  rootState: State
  rootGetters: Getters
}
