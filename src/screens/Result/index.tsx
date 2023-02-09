import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@rneui/themed'
import Lottie from 'lottie-react-native'
import { useMemo } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import Button from '../../components/button/Button'
import Header from '../../components/header/MainHeader'
import Text from '../../components/Text'
import { useAuthContext } from '../../context/useAuthProvider'
import { RootStackParamList } from '../../navigation/types'
import styles from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen = (props: Props) => {
  const { theme } = useTheme()
  const authContext = useAuthContext()

  const color = useMemo(() => props.route.params.isSuccess ? theme.colors.primary : theme.colors.error, [props.route.params.isSuccess])
  const resultText = useMemo(() => props.route.params.isSuccess ? 'Success' : 'Failed', [props.route.params.isSuccess])
  const iconLottie = useMemo(() => {
    return props.route.params.isSuccess ?
      <Lottie style={styles.lottieLogin} source={require('../../assets/lotties/success-animation.json')} loop={false} autoPlay /> :
      <Lottie style={styles.lottieLogin} source={require('../../assets/lotties/error.json')} loop={false} autoPlay />
  }, [props.route.params.isSuccess])
  const typeBtn = useMemo(() => props.route.params.isSuccess ? 'primary' : 'error', [props.route.params.isSuccess])

  const onClickHandler = (): void => {
    authContext?.resetAuth()
    if (props.navigation.canGoBack()) props.navigation.goBack()
    else props.navigation.navigate('Login')
  }

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <SafeAreaView style={styles.container}>
        <Header title='Result' titleColor={color} />
        <Animated.View entering={FadeInUp.delay(500)} exiting={FadeOutUp}>
          {iconLottie}
        </Animated.View>
        <Animated.View style={styles.contentContainer} entering={FadeInUp.delay(700)} exiting={FadeOutUp}>
          <Text type='h3' style={[styles.labelText, { color }]}>{resultText}</Text>
          {props.route.params.isSuccess && <>
            <Text type='h5' style={styles.labelText}>Welcome</Text>
            <Text type='label' style={styles.labelText}>{authContext?.user.email}</Text>
          </>}
          <View style={styles.box_h20} />
          <Button onPress={onClickHandler} title='PROCEED' type={typeBtn} />
        </Animated.View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ResultScreen

