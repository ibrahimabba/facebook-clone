import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { BASE_URL, STATUSBAR_HEIGHT } from '../constants';
import { useIsFocused } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome5'

import { TopTabParamList, HomeStackParamList, GroupStackParamList, WatchTabStackParamList, TopTabScreenProps } from '../types';
import Home from '../screens/Home';
import Comments from '../screens/Comments';
import GroupScreen from '../screens/GroupScreen';
import WatchScreen from '../screens/WatchScreen';


const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const HomeTab = () => {

  const Stack = createStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS, gestureResponseDistance: 800, gestureDirection: 'vertical' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen options={{ cardStyle: { backgroundColor: 'transparent' } }} name="Comments" component={Comments} />
    </Stack.Navigator>
  )
}

const GroupTab = () => {
  const Stack = createStackNavigator<GroupStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Group" component={GroupScreen} />
    </Stack.Navigator>
  )
}
const WatchScreenWithIsFocused = (props: any) => {
  const isFocused = useIsFocused();
  return <WatchScreen {...props} isFocused={isFocused}></WatchScreen>;
}
const WatchTab = () => {
  const Stack = createStackNavigator<WatchTabStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Watch" component={WatchScreenWithIsFocused} />
    </Stack.Navigator>
  )
}

export default function TopTabNavigator() {
  const navigationOptions = {
    tabBarStyle: {
      //paddingTop: STATUSBAR_HEIGHT
    },
    tabBarShowIcon: true,
    tabBarShowLabel: false,
  }
  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        options={{ tabBarIcon: ({ focused }) => (<Icon name='home' size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>) }}
        name="HomeTab" component={HomeTab} />
      <Tab.Screen
        options={{ tabBarIcon: ({ focused }) => (<Icon name='users' size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>) }}
        name="GroupTab" component={GroupTab} />
      <Tab.Screen
        options={{ tabBarIcon: ({ focused }) => (<Icon name='video' size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>) }}
        name="WatchTab" component={WatchTab} />
    </Tab.Navigator>

  );
}