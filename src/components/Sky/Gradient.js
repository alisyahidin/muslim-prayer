import React from 'react'
import Stop from './Stop'

import { sky } from '../../constants/'

const Gradient = ({ timing }) => (
  <>
    <Stop
      pose={'color'}
      poseKey={timing}
      color={sky[timing].bottom}
    />
    <Stop
      pose={'color'}
      poseKey={timing}
      color={sky[timing].middle}
      offset="0.5"
    />
    <Stop
      pose={'color'}
      poseKey={timing}
      color={sky[timing].top}
      offset="1"
    />
  </>
)

export default Gradient