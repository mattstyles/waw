
import React, {Fragment} from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '@waw/components'

// import {Navigation, push} from 'core/navigator'
import {RouteMatcher} from 'raid-navigator'

import {dispatch} from 'signals'

const push = dispatch('ROUTE_CHANGE')

const App = ({state}) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <button onClick={e => push('/settings')}>Settings</button>
      <button onClick={e => push('/')}>Home</button>
      <RouteMatcher navigation={state.navigation}>
        <div route='/'>
          <h1>Home</h1>
        </div>
        <div route='/settings'>
          <h1>Home</h1>
        </div>
      </RouteMatcher>
    </Fragment>
  </ThemeProvider>
)

export default App
