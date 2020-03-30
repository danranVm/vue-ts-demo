import { test } from './modules/test'

/** 提取出所有 module 的 state 类型 */
export interface State {
  test: typeof test.state
}

/** 提取出所有 module 的 getters 类型 */
export type GettersFuncMap = typeof test.getters

/** 提取出所有 module 的 mutations 类型 */
export type MutationsFuncMap = typeof test.mutations

/** 提取出所有 module 的 actions 类型 */
export type ActionsFuncMap = typeof test.actions
