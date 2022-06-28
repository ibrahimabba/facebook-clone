import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName, Platform } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HeaderComponent from '../components/HeaderComponent';
import { RootStackParamList } from '../types';
import colors from "../constants/Colors";
import LinkingConfiguration from './LinkingConfiguration';

import TopTabNavigator from "./TopTabNavigator";
import { navigationRef } from './navigationRef';
import { TransitionPresets } from '@react-navigation/stack';
import StoryDetail from '../screens/StoryDetail';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const Theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const MyTheme = {
    ...Theme,
    colors: {
      ...Theme.colors,
      background: colors.dark.background,
      card: colors.dark.card,
      border: colors.dark.card
    },
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const TransitionPreset = Platform.OS === 'ios' ? TransitionPresets.ModalSlideFromBottomIOS : {}

  return (
    <Stack.Navigator screenOptions={{headerShown:false, gestureDirection: 'vertical', gestureResponseDistance: 800, ...TransitionPreset}}>
      <Stack.Screen name="Root" component={TopTabNavigator} options={{ header: (props) => <HeaderComponent />, headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="StoryDetail" component={StoryDetail} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}