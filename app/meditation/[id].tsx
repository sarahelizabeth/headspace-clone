import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { meditations } from '@/constants/data';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

import audio from '@/assets/audio/audio1.mp3';
import AnimatedBackground from '@/components/AnimatedBackground';

const MeditationDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((meditation) => meditation.id === Number(id));

  const player = useAudioPlayer(audio);
  const status = useAudioPlayerStatus(player);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return (
    <SafeAreaView className='h-full bg-orange-400 flex-1 p-4 items-center justify-between'>
      <AnimatedBackground />

      <View className='flex-1 px-6'>
        <Text className='text-zinc-800 text-3xl font-bold mt-20 text-center'>{meditation?.title}</Text>
      </View>

      {status.playing ? (
        <TouchableOpacity
          className='bg-zinc-800 rounded-full self-center w-24 aspect-square items-center justify-center'
          onPress={() => player.pause()}
        >
          <FontAwesome6 name='pause' size={30} color='snow' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className='bg-zinc-800 rounded-full self-center w-24 aspect-square items-center justify-center'
          onPress={() => player.play()}
        >
          <FontAwesome6 name='play' size={30} color='snow' />
        </TouchableOpacity>
      )}

      <View className='flex-1 w-full'>
        <View className='p-5 mt-auto w-full'>
          <View className='flex-row items-center justify-between'>
            <MaterialIcons name='airplay' size={24} color='snow' />
            <MaterialCommunityIcons name='cog-outline' size={24} color='snow' />
          </View>
          <Slider
            value={status.currentTime / status.duration}
            onValueChange={(value) => player.seekTo(value * status.duration)}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='#3a3937'
            maximumTrackTintColor='#3a393755'
            thumbTintColor='#3a3937'
            step={0.01}
            style={{ width: '100%', height: 40 }}
          />
          <View className='flex-row items-center justify-between'>
            <Text className='text-snow text-sm'>{formatTime(status.currentTime)}</Text>
            <Text className='text-snow text-sm'>{formatTime(status.duration)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MeditationDetail