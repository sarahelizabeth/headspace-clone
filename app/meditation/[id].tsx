import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { meditations } from '@/constants/data';
import { Stack, useLocalSearchParams } from 'expo-router';
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { useAudioPlayer } from 'expo-audio';

import audio from '@/assets/audio/audio1.mp3';

const MeditationDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((meditation) => meditation.id === Number(id));
  const [isPlaying, setIsPlaying] = useState(false);
  
  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-orange-400">
      <View className="flex-1 p-4 items-center justify-between">
        <Text className="text-zinc-800 text-2xl font-bold mt-10">{meditation?.title}</Text>
        <TouchableOpacity className="bg-zinc-800 rounded-full mt-4 self-center w-20 aspect-square items-center justify-center">
          {isPlaying ? (
            <FontAwesome6 name="pause" size={24} color="snow" />
          ) : (
            <FontAwesome6 name="play" size={24} color="snow" />
          )}
        </TouchableOpacity>
        <View className="flex-1 w-full">
          <View className="p-5 mt-auto w-full">
            <View className="flex-row items-center justify-between">
              <MaterialIcons name="airplay" size={24} color="snow" />
              <MaterialCommunityIcons name="cog-outline" size={24} color="snow" />
            </View>
            <Slider
              value={0.5}
              onValueChange={(value) => console.log(value)}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#3a3937"
              maximumTrackTintColor="#3a393755"
              thumbTintColor="#3a3937"
              step={0.01}
              style={{ width: '100%', height: 40 }}
            />
            <View className="flex-row items-center justify-between">
              <Text className="text-snow text-sm">00:00</Text>
              <Text className="text-snow text-sm">00:00</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MeditationDetail

const styles = StyleSheet.create({})