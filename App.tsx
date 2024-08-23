import * as React from 'react';
import { LogBox, StyleSheet, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { initializeStore } from './src/store';
import Header from './src/views/components/shared/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes/routes';

const App: any = () => {

  const initStore = initializeStore()
  LogBox.ignoreAllLogs()

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <Provider store={initStore}>
        <Header />
        <Routes />
      </Provider>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    // height: 30,
    // marginHorizontal: 16,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});