import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Temp from '../'

storiesOf('Temp', module)
  .add('with no text', () => (
    <Temp />
  ))
