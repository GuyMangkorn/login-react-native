import { useTheme } from '@rneui/themed'
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'

import { ILoadingProps } from './types'

const Loading = (props:ILoadingProps) => {
  const { theme } = useTheme()
  return (
    <Modal visible={props.visible} transparent animationType='fade'>
      <View style={styles.container}>
        <ActivityIndicator size='large' color={theme.colors.primary} />
      </View>
    </Modal>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
})
