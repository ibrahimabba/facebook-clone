import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HeaderComponent from '../components/HeaderComponent';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import TopTabNavigator from "./TopTabNavigator";


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const Theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const MyTheme = {
    ...Theme,
    colors: {
      ...Theme.colors,
      background: '#242526',
      card: '#242526',
      border: '#242526'
    },
  };

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={TopTabNavigator} options={{ header: (props) => <HeaderComponent />, headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}