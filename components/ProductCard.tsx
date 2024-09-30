import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import icons from "../constants/icons";

interface ImageProps {
  title: string;
  image: string; // or any type that fits your use case, such as `string | URL`
}

interface ProductCardProps {
  image: ImageProps;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image: { title, image },
}) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-1 flex-row">
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white text-sm font-psemibold"
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
      >
        <Image
          source={{ uri: image }}
          className="w-full h-full rounded-xl mt-3"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
