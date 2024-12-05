import { types } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

import ServiceStore from './ServiceStore'

const AppStore = types.model('AppStore', {
  service: types.optional(ServiceStore, {}),
})

const initialStore = {
  service: {},
}

export const createStore = (data = {}) => AppStore.create({ ...initialStore, ...data })

const store = createStore()
export default makeInspectable(store)
