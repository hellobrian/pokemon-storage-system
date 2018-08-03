import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

import PokeButton from './index'
import pokeball from './pokeball.png'

const stories = storiesOf('PokeButton', module)

stories.addDecorator(withKnobs)

stories.add('Poke Ball', () => (
  <PokeButton imgSrc={pokeball} disabled={boolean('Disabled', false)} />
))
