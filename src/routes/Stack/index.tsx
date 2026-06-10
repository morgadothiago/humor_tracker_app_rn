import { createNativeStackNavigator, NativeStackNavigationProp, } from '@react-navigation/native-stack';
import { Home } from '@/screens/Home';
import { Details } from '@/screens/Details';
import { SetUserNamePage } from '@/screens/SetUserNameDetails';
import { RouteProp } from '@react-navigation/native';


type RootStackParamList = {
  navigate(arg0: string): void
  Home: undefined
  Details: { rate: number }
  SetUserNamePage: { rate: number }
}


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="SetUserNamePage" component={SetUserNamePage} />
    </Stack.Navigator>
  );
}

export type TNavigationProps = NativeStackNavigationProp<RootStackParamList>
export type TRouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>
