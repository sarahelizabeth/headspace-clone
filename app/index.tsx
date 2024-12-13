import MeditationItem from "@/components/MeditationItem";
import { Text, View, FlatList } from "react-native";
import { Meditation } from "@/types";
import { meditations } from "@/constants/data";


export default function Index() {
  return (
    <FlatList
      className="bg-white"
      contentContainerClassName="gap-8 p-3 pr-10"
      data={meditations}
      renderItem={({ item }) => <MeditationItem meditation={item} />}
    />
  );
}
