import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="Movies"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color }) => <Ionicons name="videocam-outline" size={26} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="Tv"
        options={{
          title: 'Tv',
          tabBarIcon: ({ color }) => <MaterialIcons name="live-tv" size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="My-List"
        options={{
          title: 'My List',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
          headerShown: false
        }}
      />
    </Tabs>

  );
}
