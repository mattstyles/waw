
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {isUndefined} from 'lodash/fp'

import {pixellate} from '../theme/mixins'

export const Sprite = styled.div`
  display: inline-block;
  background-position: -${props => props.u * props.size}px -${props => props.v * props.size}px;
  background-image: url('${props => props.url}');
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: scale(${props => props.scale});
  ${pixellate}

  ${props => (!isUndefined(props.x) || !isUndefined(props.y) || !isUndefined(props.z)) && css`
    position: absolute;
    transform: translate3d(${props => props.x || 0}px, ${props => props.y || 0}px, ${props => props.z || 0}px) scale(${props => props.scale});
  `}
`

Sprite.propTypes = {
  u: PropTypes.number,
  v: PropTypes.number,
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  scale: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number
}

Sprite.defaultProps = {
  u: 0,
  v: 0,
  size: 8,
  scale: 1
}
