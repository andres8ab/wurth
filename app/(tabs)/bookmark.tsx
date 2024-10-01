import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";

const Bookmark = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
    </SafeAreaView>
  );
};

export default Bookmark;
