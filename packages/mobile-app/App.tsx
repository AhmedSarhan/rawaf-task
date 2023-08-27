import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
export default function App () {
  return (
    // @ts-ignore
    <TailwindProvider value={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
}

const MyComponent = () => {
  const tailwind  = useTailwind();
  return (
    <View style={tailwind('flex flex-col items-center')}>
      <Text style={tailwind('text-2xl font-bold')}>Hello World</Text>
      <Text style={tailwind('text-red-500')}>Tailwind is working!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
