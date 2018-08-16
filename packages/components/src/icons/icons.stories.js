
import {storiesOf} from '@storybook/react'

import {Icon} from './'
import {View} from '../'

storiesOf('Icons', module)
  .add('home', () => (
    <View>
      <Icon icon='HOME' />
    </View>
  ))
