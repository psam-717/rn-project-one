//included spaces when we need them
import { View } from 'react-native'
import React from 'react'

import type { DimensionValue } from 'react-native'
type SpacerProps = {
    width?: DimensionValue;
    height?: DimensionValue;
}

const Spacer: React.FC<SpacerProps> = ({width = '100%', height = 30}) => {
  return (
    <View
      style={{width, height}}
    />
  )
}

export default Spacer