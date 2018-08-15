
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {getTheme} from './theme/utils'

export const View = styled.div`
  display: ${props => props.flex && 'flex'};
  flex-direction: ${props => props.flex && 'column'};
  flex: 1;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${props => props.isPadded && `${getTheme('basePadding')}rem`}
`
View.propTypes = {
  isPadded: PropTypes.bool,
  flex: PropTypes.bool
}
View.defaultProps = {
  isPadded: false,
  flex: false
}
