import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
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
