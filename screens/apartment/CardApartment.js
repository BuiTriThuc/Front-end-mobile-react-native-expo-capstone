import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function CardApartment() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailApartment")}
        style={styles.shadow}
        className="bg-white w-full h-auto mt-3 px-3 mb-3"
      >
        <View className="flex flex-row items-center justify-between ">
          <Text className="text-[20px] text-blue-700 pt-4 pb-3  font-bold">
            Deluxe Apartment
          </Text>
          <View>
            <AntDesign color="blue" size={20} name="infocirlceo" />
          </View>
        </View>
        <View className="flex flex-row items-center">
          <AntDesign name="creditcard" size={25} color="gray" />
          <Text className="text-[16px] ml-2 text-green-700 font-bold">
            Prepay the apartment
          </Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2 mt-2">
          <View className="flex flex-row items-center">
            <AntDesign name="wifi" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Free wifi</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Baconly</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Garden view</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">City view</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="pool" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Pool</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="snowflake-o" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Air conditioner</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <Ionicons name="volume-mute" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Soundproof</Text>
          </View>
          <View className="flex flex-row items-center">
            <Entypo name="tv" size={20} color="gray" />
            <Text className="text-[16px] ml-2">TV</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="shower" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Shower</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Mini bar</Text>
          </View>
        </View>
        <View className="flex flex-row ">
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} />
          <View className="flex flex-row">
            <Text className="ml-2">Tips:</Text>
            <Text className="mr-2 ml-1">
              This apartment is larger than most other apartments at the resort
            </Text>
          </View>
        </View>
        <Text className="pt-2">Only one on HolidaySwap</Text>
        <View className="w-full h-[1px] bg-gray-300 mt-2 mb-4"></View>
        <View>
          <Text>Price for 0n1 night</Text>
          <View className="flex flex-row items-center gap-4 py-2">
            <View className="flex flex-row items-center">
              <Text className="text-red-500 line-through mr-1 text-[15]">
                2000
              </Text>
              <FontAwesome5 name="coins" size={15} color="orange" />
            </View>
            <View className="flex flex-row items-center">
              <Text className="text-[25px] font-bold mr-1">1200</Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <Text>Taxes and fees included</Text>
          </View>
          <View>
            <TouchableOpacity className="px-2 w-full border border-blue-500 my-3">
              <Text className="text-blue-500 font-bold text-[20px] py-2 text-center">
                CHOSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white w-full h-auto mt-3 px-3 mb-3"
      >
        <View className="flex flex-row items-center justify-between ">
          <Text className="text-[20px] text-blue-700 pt-4 pb-3  font-bold">
            Standard Apartment
          </Text>
          <View>
            <AntDesign color="blue" size={20} name="infocirlceo" />
          </View>
        </View>
        <View className="flex flex-row items-center">
          <AntDesign name="creditcard" size={25} color="gray" />
          <Text className="text-[16px] ml-2 text-green-700 font-bold">
            Prepay the apartment
          </Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2 mt-2">
          <View className="flex flex-row items-center">
            <AntDesign name="wifi" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Free wifi</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Baconly</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Garden view</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">City view</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="pool" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Pool</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="snowflake-o" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Air conditioner</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <Ionicons name="volume-mute" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Soundproof</Text>
          </View>
          <View className="flex flex-row items-center">
            <Entypo name="tv" size={20} color="gray" />
            <Text className="text-[16px] ml-2">TV</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="shower" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Shower</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Mini bar</Text>
          </View>
        </View>
        <View className="flex flex-row ">
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} />
          <View className="flex flex-row">
            <Text className="ml-2">Tips:</Text>
            <Text className="mr-2 ml-1">
              This apartment is larger than most other apartments at the resort
            </Text>
          </View>
        </View>
        <Text className="pt-2">Only one on HolidaySwap</Text>
        <View className="w-full h-[1px] bg-gray-300 mt-2 mb-4"></View>
        <View>
          <Text>Price for 0n1 night</Text>
          <View className="flex flex-row items-center gap-4 py-2">
            <View className="flex flex-row items-center">
              <Text className="text-red-500 line-through mr-1 text-[15]">
                1000
              </Text>
              <FontAwesome5 name="coins" size={15} color="orange" />
            </View>
            <View className="flex flex-row items-center">
              <Text className="text-[25px] font-bold mr-1">900</Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <Text>Taxes and fees included</Text>
          </View>
          <View>
            <TouchableOpacity className="px-2 w-full border border-blue-500 my-3">
              <Text className="text-blue-500 font-bold text-[20px] py-2 text-center">
                CHOSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white w-full h-auto mt-3 px-3 mb-3"
      >
        <View className="flex flex-row items-center justify-between ">
          <Text className="text-[20px] text-blue-700 pt-4 pb-3  font-bold">
            Pen-House Apartment
          </Text>
          <View>
            <AntDesign color="blue" size={20} name="infocirlceo" />
          </View>
        </View>
        <View className="flex flex-row items-center">
          <AntDesign name="creditcard" size={25} color="gray" />
          <Text className="text-[16px] ml-2 text-green-700 font-bold">
            Prepay the apartment
          </Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2 mt-2">
          <View className="flex flex-row items-center">
            <AntDesign name="wifi" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Free wifi</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Baconly</Text>
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Garden view</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="eyeo" size={20} color="gray" />
            <Text className="text-[16px] ml-2">City view</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="pool" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Pool</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="snowflake-o" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Air conditioner</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <Ionicons name="volume-mute" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Soundproof</Text>
          </View>
          <View className="flex flex-row items-center">
            <Entypo name="tv" size={20} color="gray" />
            <Text className="text-[16px] ml-2">TV</Text>
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome name="shower" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Shower</Text>
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-between mb-2">
          <View className="flex flex-row items-center">
            <AntDesign name="check" size={20} color="gray" />
            <Text className="text-[16px] ml-2">Mini bar</Text>
          </View>
        </View>
        <View className="flex flex-row ">
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} />
          <View className="flex flex-row">
            <Text className="ml-2">Tips:</Text>
            <Text className="mr-2 ml-1">
              This apartment is larger than most other apartments at the resort
            </Text>
          </View>
        </View>
        <Text className="pt-2">Only one on HolidaySwap</Text>
        <View className="w-full h-[1px] bg-gray-300 mt-2 mb-4"></View>
        <View>
          <Text>Price for 0n1 night</Text>
          <View className="flex flex-row items-center gap-4 py-2">
            <View className="flex flex-row items-center">
              <Text className="text-red-500 line-through mr-1 text-[15]">
                5000
              </Text>
              <FontAwesome5 name="coins" size={15} color="orange" />
            </View>
            <View className="flex flex-row items-center">
              <Text className="text-[25px] font-bold mr-1">3000</Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <Text>Taxes and fees included</Text>
          </View>
          <View>
            <TouchableOpacity className="px-2 w-full border border-blue-500 my-3">
              <Text className="text-blue-500 font-bold text-[20px] py-2 text-center">
                CHOSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
