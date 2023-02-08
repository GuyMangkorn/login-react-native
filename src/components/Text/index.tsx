import { Text as CompText, View } from 'react-native'

import useStyles from './styles'
import { TextProps } from './types'

const Text = (props: TextProps): JSX.Element => {
  const styles = useStyles()
  return (
    <View>
      <CompText {...props} style={[styles[props.type],props.style]} >{props.children}</CompText>
    </View>
  )
}

export default Text

