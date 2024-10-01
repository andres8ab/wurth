import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const CartIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="justify-center items-center -mt-10 bg-secondary rounded-3xl w-20 h-20 rotate-45">
      <View className="-rotate-45 justify-center items-center">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-8 h-8"
        />
        <Text
          className={`text-xs ${focused ? "font-psemibold" : "font-pregular"} `}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#D9000D",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
            display: Platform.OS === "web" ? "none" : "flex",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Inicio"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name="Categorias"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Carrito",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <CartIcon
                icon={icons.cart}
                color={focused ? "#161622" : color}
                focused={focused}
                name="Carrito"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focused={focused}
                name="Create"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
