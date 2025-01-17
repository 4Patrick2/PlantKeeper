import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-1 mt-4'>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
    <Text className={`${focused ? "font-semibold" : "font-normal"} text-xs -ml-3 -mr-3`} style={{color: color}}>
      {name}
    </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <> 
      <Tabs
        screenOptions={
          { tabBarShowLabel: false, 
            tabBarActiveTintColor: "#5BE42A",
            tabBarInactiveTintColor: "#cdcde0",
            tabBarStyle: {
              backgroundColor: "#161622",
              borderTopWidth: 1,
              borderTopColor: "#232533",
              height: 64,
              
            }}
        }
      >
        <Tabs.Screen
          name = "index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.house}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name = "calander"
          options={{
            title: "Schedule",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.calendar}
                color={color}
                name="Schedule"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name = "createPlant"
          options={{
            title: "Add Plant",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plant}
                color={color}
                name="Add Plant"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout