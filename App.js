import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import Home from './Screens/Home';
import Detail from './Screens/Detail';
import HomePage from './Screens/HomePage';
import DsNhom from './Screens/DsNhom';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#aa3763',
          inactiveTintColor: 'gray',
          labelStyle: { fontSize: 15 },
          style: { backgroundColor: 'white' },
        }}>
        <Tab.Screen
          name="Home Page"
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ds Nhóm"
          component={DsNhom}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="people-carry" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Todo app"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="md-checkmark-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}>
          {() => (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
