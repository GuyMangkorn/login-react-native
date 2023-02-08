import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
  },
  labelText: {
    alignSelf: 'center',
  },
  box_h20: {
    height: 20,
  },
  lottieLogin: {
    height: height * 0.4,
    alignSelf: 'center',
  },
})
