import { useNavigation } from '@react-navigation/native'
import { Icon, makeStyles } from '@rneui/themed'
import { TouchableOpacity, View } from 'react-native'

import Text from '../Text'
import { HeaderProps } from './types'

const Header = (props: HeaderProps): JSX.Element => {
  const styles = useStyles(props)
  const navigation = useNavigation()

  const onGoBack = (): void => {
    if (navigation.canGoBack()) navigation.goBack()
    else null
  }

  return (
    <View style={styles.container}>
      <View>
        {
          !props.disableGoBack && <TouchableOpacity
            onPress={onGoBack}
          >
            <Icon
              name='chevron-left'
              type='entypo'
              size={28}
            />
          </TouchableOpacity>
        }
      </View>
      <View style={styles.rightContent}>
        <Icon
          color={props.titleColor ? props.titleColor : styles.text.color}
          name='infocirlce'
          type='antdesign'
        />
        <Text type='h4' style={[styles.text, !!props.titleColor && { color: props.titleColor }]}>{props.title}</Text>
      </View>
    </View>
  )
}

export default Header

const useStyles = makeStyles((theme) => ({
  container: {
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.primary,
    marginLeft: 5,
  },
})) 
