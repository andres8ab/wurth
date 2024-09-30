import { View, Text, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          {/* <Image
            source={images.logoWurth}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          /> */}
          <Image
            source={images.logoWurth}
            className="max-w-[85%] w-full h-[300px] rounded-full"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Lo mejor para profesionales con{" "}
              <Text className="text-secondary-200">Wurth</Text>
            </Text>
            {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            /> */}
          </View>
          <Text className="text-sm font-pregular text-center mt-7 text-gray-100">
            Descubre nuestra gran selección de herramientas de la mejor calidad
            para auto, cargo y más. Realiza tu pedido y recíbelo de 24 a 72 H
          </Text>
          <CustomButton
            title="Inicia con tu cuenta"
            handlePress={() => router.push("/sign-in")}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}
