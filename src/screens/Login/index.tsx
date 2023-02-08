import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Lottie from 'lottie-react-native'
import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import Button from '../../components/button/Button'
import Header from '../../components/header/MainHeader'
import TextInput from '../../components/input/TextInput'
import Loading from '../../components/modal/Loading'
import Text from '../../components/Text'
import { useAuthContext } from '../../context/useAuthProvider'
import { RootStackParamList } from '../../navigation/types'
import styles from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = (props: Props): JSX.Element => {
  const authContext = useAuthContext()

  useEffect(() => {
    if (authContext?.isSuccess || authContext?.isError) {
      props.navigation.navigate('Result', { isSuccess: authContext.isSuccess })
    }
  }, [authContext?.isSuccess, authContext?.isError])

  return (
    <ScrollView style={styles.container}>
      <Header disableGoBack title='Sign in' />
      <Loading visible={authContext?.loading} />
      <View style={styles.contentContainer}>
        <Animated.View entering={FadeInUp.delay(50)} exiting={FadeOutUp}>
          <Lottie style={styles.lottieLogin} source={require('../../assets/lotties/charts.json')} autoPlay loop />
        </Animated.View>
        <Animated.View style={styles.inputContainer} entering={FadeInUp.delay(150)} exiting={FadeOutUp}>
          <TextInput
            value={authContext?.value.email}
            placeholder='Johndoe@email.com'
            editable={!authContext?.loading}
            onChangeText={(text) => authContext?.onChangeHandler('email', text)}
            keyboardType='email-address'
            returnKeyType='next'
            error={!!authContext?.error.email}
            label='E-Mail'
            autoCapitalize='none' />
          {!!authContext?.error.email && <Text style={styles.errorText} type='error'>{authContext?.error.email}</Text> } 
          <View style={styles.box_h15} />
          <TextInput
            value={authContext?.value.password}
            editable={!authContext?.loading}
            onChangeText={(text) => authContext?.onChangeHandler('password', text)}
            password
            error={!!authContext?.error.password}
            keyboardType='default'
            returnKeyType='done'
            label='Password'
            autoCapitalize='none' />
          {!!authContext?.error.password && <Text style={styles.errorText} type='error'>{authContext?.error.password}</Text>} 
          <View style={styles.box_h25} />
          <Button onPress={authContext?.handleSubmit} title='SIGN IN' type='primary' />
        </Animated.View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen
