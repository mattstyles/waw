
import {safe, compress} from 'raid-addons'

import actions from './actions'

export const debug = safe((state, event) => {
  console.log(event, '::', state)
})

export const updateMessage = compress({
  'UPDATE_MESSAGE': safe((state, payload) => {
    return {
      ...state,
      message: state.message === 'hello'
        ? 'world'
        : 'hello'
    }
  }),
  [actions.changeRoute]: safe((state, payload) => {
    console.log('::', state, payload)
    return {
      ...state,
      navigation: payload
    }
  })
})
