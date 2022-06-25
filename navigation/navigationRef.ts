import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef<any>();
// export const navigation = navigationRef.current
export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}
export function dispatch(action: any) {
  navigationRef.current?.dispatch(action);
}
export function jumpTo(name: any, params: any) {
  navigationRef.current?.jumpTo(name, params);
}
export function replace(name: any, params: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function push(name: any, params: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function goBack() {
  navigationRef.current?.goBack();
}
export default {
  navigate,
  dispatch,
  jumpTo,
  replace,
  push,
  goBack,
};
