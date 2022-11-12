import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Routes from './stackRoutes'
import { BottomNavigation } from './TapNavigation';
import { NavigationContainer } from '@react-navigation/native'; 
const Stack = createStackNavigator();

function AppStack() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" 
                component={Routes.Login} 
                options={{ headerShown: false,
                }}/>
                <Stack.Screen name="Menu" 
                component={BottomNavigation} 
                options={{ headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
        
  );
}

export default AppStack;