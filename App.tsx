import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';
import YourLanguage from './screens/YourLanguage';
import OnLanguage from './screens/OnLanguage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style='light' />
          <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false, cardStyle: { backgroundColor: '#323232' }  }} />
            <Stack.Screen name="YourLanguage" component={YourLanguage} options={{
                presentation: 'modal',
                headerShown: false,
              }}/>
            <Stack.Screen name="OnLanguage" component={OnLanguage} options={{
                presentation: 'modal',
                headerShown: false,
              }}/>
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


  {/* <View style={styles.container}>
  <StatusBar style='light'/>
  <MainScreen/>
  <YourLanguage/>
  <OnLanguage/>
  </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
