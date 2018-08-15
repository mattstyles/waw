
import {storiesOf} from '@storybook/react'

import {Sprite} from './sprite'
import {View} from '../view'

import sheet from '../assets/charb.png'

storiesOf('Sprite', module)
  .add('basic', () => (
    <View>
      <Sprite
        url={sheet}
        scale={2}
      />
    </View>
  ))
  .add('absolute', () => (
    <View>
      <Sprite
        url={sheet}
        scale={8}
        size={8}
        u={1}
        v={1}
        x={100}
        y={200}
      />
    </View>
  ))
