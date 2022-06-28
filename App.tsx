import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import 'react-native-gesture-handler';

import { Provider } from "react-redux";
import { BASE_URL } from './constants'
import axios from 'axios';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from "./store/store";

axios.defaults.baseURL = BASE_URL

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="light" backgroundColor='#242526' />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
