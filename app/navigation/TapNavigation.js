import React from 'react';
import Routes from './stackRoutes'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores } from '../../colors';

const Tab = createBottomTabNavigator();


export function BottomNavigation() {
    return (
       
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={Routes.Menu} options={{
                headerShown: false,
                tabBarIcon: () =>(
                    <AntDesign name='home' color={colores.primary} size={35}/>
                ),
            }}/>
            <Tab.Screen name="Ayuda" component={Routes.Ayuda} options={{
                headerShown: false,
                tabBarIcon: () =>(
                    <Entypo name='help' color={colores.primary} size={35}/>
                ),
            }}/>

            <Tab.Screen name="Quiz" component={Routes.Quiz} options={{ 
                headerShown: false,
                tabBarStyle: {display: 'none'},
                tabBarHideOnKeyboard: false,
                tabBarIcon: () =>(
                    <AntDesign name='filetext1' color={colores.primary} size={35}/>
                ),
            }}/>
        </Tab.Navigator>
    
    );
  }