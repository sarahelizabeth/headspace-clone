import { Stack, useRouter } from 'expo-router';
import '../global.css';
import { TouchableOpacity, Text } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="meditation/[id]" options={{ 
        presentation: 'fullScreenModal',
        headerRight: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="info" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Text className="text-xs font-bold bg-zinc-800 text-white px-3 py-2 rounded-md">Today's Meditation</Text>
        ),
        headerShadowVisible: false,
        headerTransparent: true,
      }} />
    </Stack>
  );
}
