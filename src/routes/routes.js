import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../Screens/Splash';
import { Text } from 'react-native';
import { HomeLanding } from '../../Screens/Home';
import Details from '../../Screens/Home/Details/details';
import CartScreen from '../../Screens/Home/Cart';
import ConfirmationScreen from '../../Screens/Home/ConfirmationScreen';
const Stack = createNativeStackNavigator();


function Routes() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name="HomeLanding" component={HomeLanding}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;

