import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quotes from './src/screens/Quotes';
import PolicyLogin from './src/screens/PolicyLoginScreen';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import BottomNavigation from './src/BottomNavigation';
import MyProfile from './src/components/Profile/MyProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='OnboardingScreen'
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='BottomNavigation'
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PolicyLogin'
          component={PolicyLogin}
        />
        <Stack.Screen name='Quotes' component={Quotes} />
        <Stack.Screen name='My Profile' component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
