import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex flex-1 items-center justify-center">
        <Text>Edit Here!</Text>
      </View>
    </>
  );
}
