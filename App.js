// In App.js in a new project

import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quotes from "./src/screens/Quotes";
import PolicyLogin from "./src/screens/PolicyLoginScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import BottomNavigation from "./src/BottomNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: true}} />
        <Stack.Screen
          name="PolicyLogin"
          component={PolicyLogin}
          // options={{
          //   header: () => (
          //     <CustomHeader
          //       title="Policy Login"
          //       subheader="Select from your existing Leads"
          //     />
          //   ),
          // }}
        />
        <Stack.Screen name="Quotes" component={Quotes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
