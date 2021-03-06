
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'

const initial = {
  message: 'hello',

  navigation: 'home'
  // navigation: {
  //   index: 0,
  //   stack: [
  //     {pathname: '/'}
  //   ]
  // }
}

export const signal = new Signal(initial)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({type, payload})
export const emit = (type, payload) => signal.emit({type, payload})
