import React from 'react'
import ReactNative from 'react-native'

const {TouchableOpacity} = ReactNative

const Button = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>
}

export default Button
