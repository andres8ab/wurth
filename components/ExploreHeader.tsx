import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "./SearchInput";

import { images } from "@/constants";

const ExploreHeader = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View className="bg-primary h-[120px]">
        <View className="flex flex-col">
          <View className="flex-row justify-between my-2 items-center px-4">
            <TouchableOpacity>
              <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
            <Image
              source={images.logo}
              className="w-32 h-auto"
              resizeMode="contain"
            />
            <TouchableOpacity>
              <Ionicons name="person" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <SearchInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;
