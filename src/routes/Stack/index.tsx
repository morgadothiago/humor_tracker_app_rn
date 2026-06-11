import { createNativeStackNavigator, NativeStackNavigationProp, } from '@react-navigation/native-stack';
import { Home } from '@/screens/Home';
import { Details } from '@/screens/Details';
import { SetUserNamePage } from '@/screens/SetUserNameDetails';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StylesThemes } from '@/shared/global/theme';


type RootStackParamList = {
  navigate(arg0: string): void
  Home: undefined
  Details: { rate: number }
  SetUserNamePage: undefined
}


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: StylesThemes.colors.background

        }

      }}
      screenLayout={({ children }) => (
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          {children}
        </SafeAreaView>
      )}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Group screenOptions={{
        presentation: 'formSheet',
        contentStyle: {},
        sheetCornerRadius: 24,
      }} >
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            sheetAllowedDetents: [0.8, 0.95]
          }}
        />
        <Stack.Screen
          name="SetUserNamePage"
          component={SetUserNamePage}
          options={{
            sheetAllowedDetents: [0.4, 0.6]
          }}
        />
      </Stack.Group>

    </Stack.Navigator>
  );
}

export type TNavigationProps = NativeStackNavigationProp<RootStackParamList>
export type TRouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>
