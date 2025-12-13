import React from 'react'
import ReactNative from 'react-native'

const {View, StyleSheet} = ReactNative

import StaticContainer from './StaticContainer'

const SceneComponent = (Props) => {
  const {shouldUpdated, ...props} = Props
  return <View {...props}>
    <StaticContainer shouldUpdate={shouldUpdated}>
      {props.children}
    </StaticContainer>
  </View>
}

export default SceneComponent
