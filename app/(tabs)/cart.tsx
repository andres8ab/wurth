import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";

const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cart Content</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
