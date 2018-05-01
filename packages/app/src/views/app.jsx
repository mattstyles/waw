
import React, {Fragment} from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '@waw/components'

import {SimpleComponentRouter} from 'simple-component-router'
import {push} from 'core/navigation'

const App = ({state}) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <button onClick={e => push('settings')}>Settings</button>
      <button onClick={e => push('home')}>Home</button>
      <SimpleComponentRouter match={state.navigation}>
        <div match='home'>
          <h1>Home</h1>
        </div>
        <div match='settings'>
          <h1>Settings</h1>
        </div>
      </SimpleComponentRouter>
    </Fragment>
  </ThemeProvider>
)

export default App
