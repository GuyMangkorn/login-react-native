import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "../../screens/Login"
import ResultScreen from "../../screens/Result"
import { RootStackParamList } from "../types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  )
}

export default MainStack

