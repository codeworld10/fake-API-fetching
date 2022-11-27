import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen"
import {Provider as ReduxProvider} from "react-redux" 
import store from "./store/store"


  export default function App() {
  const Stack = createNativeStackNavigator();
  return (

   <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} options={{
headerShown:false
     }} 
     />
   </Stack.Navigator>
 </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

