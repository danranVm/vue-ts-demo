import { test } from './modules/test'

export interface State {
  test: typeof test.state
}

export type GettersFuncMap = typeof test.getters

export type CommitFuncMap = typeof test.mutations

export type DispatchFuncMap = typeof test.actions
