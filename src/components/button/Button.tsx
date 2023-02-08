import { makeStyles } from '@rneui/themed'
import { ActivityIndicator, TouchableOpacity } from 'react-native'

import Text from '../Text'
import { IButton } from './types'

const Button = (props: IButton) => {
  const styles = useStyles()

  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.container, styles[props.type], props.style]} {...props}>
      <Text type='h5' style={styles.textColor}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.colors.white
  },
  container: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  primary: {
    backgroundColor: theme.colors.primary
  },
  error: {
    backgroundColor: theme.colors.error
  },
  secondary: {
    backgroundColor: theme.colors.secondary
  }
}))
