import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const Stack = createStackNavigator();

const App  = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Components' component={ComponentsScreen}></Stack.Screen>
        <Stack.Screen name='List' component={ListScreen}></Stack.Screen>
        <Stack.Screen name='Image' component={ImageScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default App;