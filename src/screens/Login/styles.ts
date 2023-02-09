import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
  },
  box_h15: {
    height: 15,
  },
  box_h25: {
    height: 25,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  lottieLogin: {
    height: height * 0.45,
    alignSelf: 'center',
  },
  errorText: {
    position: 'absolute',
    top: -1,
  },
});
