import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Settings } from 'react-native';
import HomePage from './components/HomePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
import SettingsPage from './components/SettingsPage';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" 
      component={HomePage} 
       options={{
        tabBarIcon: () => (
          <Image source={require("./assets/home.png")}/>
        )
      }} 
      />
      <Tab.Screen name="My Cards" 
      component={MyCards}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/myCards.png")}/>
        )
      }}  />
      <Tab.Screen name="Statistics" 
      component={Statistics}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/statictics.png")}/>
        )
      }}  />
      <Tab.Screen name="Settings" 
      component={SettingsPage}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/settings.png")}/>
        )
      }}  
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}





