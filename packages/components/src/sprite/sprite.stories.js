
import {storiesOf} from '@storybook/react'

import {Sprite} from './sprite'

import sheet from '../assets/charb.png'

storiesOf('Sprite', module)
  .add('basic', () => (
    <div>
      <Sprite
        url={sheet}
        scale={2}
      />
    </div>
  ))
  .add('absolute', () => (
    <div style={{
      position: 'relative'
    }}>
      <Sprite
        url={sheet}
        scale={8}
        size={8}
        u={1}
        v={1}
        x={100}
        y={200}
      />
    </div>
  ))
