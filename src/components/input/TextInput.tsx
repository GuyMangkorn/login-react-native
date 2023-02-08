import { Icon, makeStyles, useTheme } from '@rneui/themed'
import { useCallback, useState } from 'react'
import { TextInput as ReactNativeTextInput, TouchableOpacity, View } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

import Text from '../Text'
import { ITextInputProps } from './types'

const TextInput = (props: ITextInputProps = { password: false }): JSX.Element => {
  const { theme } = useTheme()
  const styles = useStyles()
  const [visible, setVisible] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  const progress = useDerivedValue(() => {
    if (props.error) {
      return withTiming(1)
    }
    return focus ? withTiming(1) : withTiming(0)
  }, [focus, props.error])

  const rStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(progress.value, [0, 1], [theme.colors.grey1, props.error ? theme.colors.error : theme.colors.secondary])
    return {
      borderColor,
    }
  })

  const onEyeClickHandler = useCallback(() => setVisible(prev => !prev), [])
  const onFocusHandler = useCallback(() => setFocus(true), [])
  const onBlurHandler = useCallback(() => setFocus(false), [])

  return (
    <View>
      {!!props.label && <Text type='h5' style={styles.labelColor}>{props.label}</Text>}
      <Animated.View style={[styles.container, rStyle]}>
        <ReactNativeTextInput onFocus={onFocusHandler} onBlur={onBlurHandler} secureTextEntry={props.password ? !visible : false} style={styles.inputContainer} {...props} cursorColor={styles.cursor.color} />
        {props.password && <TouchableOpacity onPress={onEyeClickHandler}><Icon name={visible ? 'eye' : 'eye-slash'} type='font-awesome' /></TouchableOpacity>}
      </Animated.View>
    </View>

  )
}

export default TextInput

const useStyles = makeStyles((theme) => ({
  cursor: {
    color: theme.colors.primary,
  },
  labelColor: {
    color: theme.colors.primary
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1
  },
  inputContainer: {
    color: theme.colors.grey4,
    fontSize: 16,
    flex: 1,
  }
}))
