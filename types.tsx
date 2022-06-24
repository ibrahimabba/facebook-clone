import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<TopTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Comments: undefined;
};

export type GroupStackParamList = {
  Group: undefined;
};

export type WatchTabStackParamList = {
  Watch: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type TopTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList> | undefined;
  GroupTab: NavigatorScreenParams<GroupStackParamList> | undefined;
  WatchTab: NavigatorScreenParams<WatchTabStackParamList> | undefined;
};

export type TopTabScreenProps<Screen extends keyof TopTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
