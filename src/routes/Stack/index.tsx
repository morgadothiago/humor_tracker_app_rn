import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/screens/Home';
import { Details } from '@/screens/Details';
import { SetUserNamePage } from '@/screens/SetUserNameDetails';



const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="SetUserNamePage" component={SetUserNamePage as any} />
    </Stack.Navigator>
  );
}

