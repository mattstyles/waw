
import React, {Fragment} from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {theme, mixins, utils} from '../src'

const WIDTH = 320
const HEIGHT = 568
const FRAME_PAD = 6

const Background = styled.div`
  ${mixins.fit}
  z-index: 0;
  background: ${utils.getGradient('primaryRadial')};
`

const Frame = styled.div`
  position: relative;
  width: ${WIDTH + (FRAME_PAD * 2)}px;
  height: ${HEIGHT + (FRAME_PAD * 2)}px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  padding: ${FRAME_PAD}px;
  margin: 20px;
  z-index: 1;
  box-sizing: border-box;
`

const Body = styled.div`
  display: flex;
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;
  background: white;
`

export const Base = ({children}) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Background />
      <Frame>
        <Body>
          {children}
        </Body>
      </Frame>
    </Fragment>
  </ThemeProvider>
)
