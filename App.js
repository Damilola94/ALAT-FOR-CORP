import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import OnboardingScreen from "./src/screen/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    const isAppFunction = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(fa
          =lse);
      }
    };
    isAppFunction();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
