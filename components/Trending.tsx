import {
  View,
  Text,
  FlatList,
  Platform,
  TouchableOpacity,
  ImageBackground,
  ViewToken,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import * as Animatable from "react-native-animatable";

const zoomIn: any = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};
const zoomOut: any = {
  0: {
    scale: 1.1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: any) => {
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      <TouchableOpacity
        className="relative justify-center items-center"
        activeOpacity={0.7}
      >
        <ImageBackground
          source={{ uri: item.image }}
          className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};

const Trending = ({ posts = [] }: any) => {
  const [activeItem, setActiveItem] = useState(posts[1] || null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveItem(viewableItems[0].key);
      }
    }
  ).current;

  const renderFlatList = useCallback(() => {
    const commonProps = {
      data: posts,
      keyExtractor: (item: any) => item.$id,
      renderItem: ({ item }: any) => (
        <TrendingItem item={item} activeItem={activeItem} />
      ),
      contentOffset: { x: 170, y: 0 },
      horizontal: true,
    };

    if (Platform.OS === "web") {
      return <FlatList {...commonProps} />;
    } else {
      return (
        <FlatList
          {...commonProps}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
        />
      );
    }
  }, [posts, activeItem, viewableItemsChanged]);

  return posts.length > 0 ? (
    renderFlatList()
  ) : (
    <Text className="text-white"></Text>
  );
};

export default Trending;
