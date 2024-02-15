import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

 function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'rgba(7,26,93,255)'
  },
});

export default App;