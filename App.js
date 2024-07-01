import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { CartProvider } from './something/Cartcontext';
import HomeScreen from './something/Home';
import ProductPage from './something/Product';
import CartPage from './something/Cart';
import CartBadge from './something/CartBadge';
import UserProfile from './something/UserProfile';
import LoginScreen from './something/Login'; // Adjust path as per your project structure

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <CartProvider>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#007BFF',
        inactiveTintColor: '#555',
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="th-list" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Icon name="shopping-cart" type="font-awesome" color={color} size={size} />
              <CartBadge />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </CartProvider>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
