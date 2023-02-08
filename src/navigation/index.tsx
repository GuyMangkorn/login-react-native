import { NavigationContainer } from "@react-navigation/native"

import MainStack from "./stacks/MainStack"

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigator

