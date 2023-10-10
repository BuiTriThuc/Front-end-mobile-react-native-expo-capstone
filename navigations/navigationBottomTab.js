import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ListDestinationScreen from "../screens/ListDestinationScreen";
import { Entypo } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#2196F3" : "#000000";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "ListDestination") {
            iconName = "shop";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return (
            <Entypo
              name={iconName}
              size={size}
              color={iconColor}
              style={{ marginTop: 10 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" options={{ tabBarLabel: "" }}>
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homes" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="ListDestination"
        component={ListDestinationScreen}
        options={{ tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
