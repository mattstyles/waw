
import {injectGlobal} from 'styled-components'
import oc from 'open-color'
import {theme} from './theme/index'

export * from './theme'
export * from './icons'
export * from './sprite/sprite'
export * from './utility'
export * from './type/type'

export const setGlobalStyling = () => {
  injectGlobal`
    html {
      font-size: 10px;
    }
    body {
      margin: 0;
      background: ${oc.gray[0]};
      color: ${oc.gray[8]};
      font-family: ${theme.type.fallback};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
    }
  `
}
