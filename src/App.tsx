import { ThemeProvider } from "@rneui/themed"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { AuthProvider } from "./context/useAuthProvider"
import Navigator from "./navigation"
import theme from "./theme"


function App(): JSX.Element {
  return (
    <AuthProvider value={null}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
export default App
