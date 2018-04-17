
import createHistory from 'history/createMemoryHistory'
import {Navigator, createActions} from 'raid-navigator'
import {createSelector} from 'reselect'

import {signal, connect} from 'signals'

const history = createHistory()

const selector = createSelector(
  state => state.navigation,
  ({navigation}) => ({
    history,
    navigation,
    signal,
    storage: null
  })
)

export const Navigation = connect(
  selector,
  Navigator
)

const actions = createActions(history)
export const push = actions.push
