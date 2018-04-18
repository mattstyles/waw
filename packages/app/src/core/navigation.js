
import {dispatch} from 'signals'
import actions from './actions'

export const push = dispatch(actions.changeRoute)
