
import {safe, compress} from 'raid-addons'

export const debug = safe((state, event) => {
  console.log(event, '::', state)
})

export const updateMessage = compress({
  'UPDATE_MESSAGE': safe((state, event) => {
    return {
      ...state,
      message: state.message === 'hello'
        ? 'world'
        : 'hello'
    }
  }),
  'ROUTE_CHANGE': safe((state, event) => {
    console.log('::', state, event)
    return {
      ...state,
      navigation: {
        index: 0,
        stack: [
          {pathname: event.payload}
        ]
      }
    }
  })
})
