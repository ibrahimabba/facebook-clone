import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<TopTabParamList> | undefined;
  StoryDetail: { position: number }
  Modal: undefined;
  NotFound: undefined;
};

export type HomeStackParamList = {
  Home: { position: number } | undefined;
  Comments: undefined;
};

export type GroupStackParamList = {
  Group: undefined;
};

export type WatchTabStackParamList = {
  Watch: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>;

export type StoryDetailScreenProps = StackScreenProps<RootStackParamList, 'StoryDetail'>;

export type TopTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList> | undefined;
  GroupTab: NavigatorScreenParams<GroupStackParamList> | undefined;
  WatchTab: NavigatorScreenParams<WatchTabStackParamList> | undefined;
};

export type TopTabScreenProps<Screen extends keyof TopTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabParamList, Screen>,
  StackScreenProps<RootStackParamList>
>;

export type HomeScreenProps = CompositeScreenProps<
  StackScreenProps<RootStackParamList>,
  CompositeScreenProps<
    MaterialTopTabScreenProps<TopTabParamList>,
    StackScreenProps<HomeStackParamList>
  >
>;