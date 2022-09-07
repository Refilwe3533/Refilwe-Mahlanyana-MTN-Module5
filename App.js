import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Picture from './src/Picture';
import Profile from './src/Profile';
import SignUp from './src/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Picture" component={Picture} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signup" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
