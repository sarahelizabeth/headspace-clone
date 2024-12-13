import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Meditation } from '@/types'
import { FontAwesome6, Octicons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

const MeditationItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <Link href={`/meditation/${meditation.id}`} asChild>
      <TouchableOpacity className="flex-row gap-3 items-center">
        <View className="bg-green-500 rounded-full w-6 h-6 flex-row justify-center items-center">
          <FontAwesome6 name="check" size={12} color="white" />
        </View>
        <View className="p-5 border-2 border-gray-300 rounded-lg flex-row justify-between items-center">
          <View className="w-9/12">
            <Text className="text-lg font-bold">{meditation.title}</Text>
            <View className="flex-row items-center gap-2">
              {meditation.type === 'audio' ? (
                <FontAwesome6 name="clock" size={16} color="gray" />
              ) : (
                <Octicons name="device-camera-video" size={16} color="gray" />
              )}
              <Text className="text-sm text-gray-500">{meditation.duration} minutes</Text>
            </View>
          </View>
          <View>
            {meditation.pro ? (
              <View className="flex-row items-center gap-2 bg-yellow-500 rounded-full px-3 py-2">
                <FontAwesome6 name="star" size={16} color="white" />
                <Text className="text-sm font-bold text-white">
                  Pro
                </Text>
              </View>
            ) : (
              <View className="flex-row items-center gap-2 bg-green-500 rounded-full px-3 py-2">
                <Feather name="thumbs-up" size={16} color="white" />
                <Text className="text-sm font-bold text-white">
                  Free
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MeditationItem

const styles = StyleSheet.create({})