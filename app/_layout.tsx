import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, SplashScreen, Link } from "expo-router"
import { useFonts } from "expo-font"

import icons from "../constants/icons"

SplashScreen.preventAutoHideAsync();

function LogoTitle() {
  return( <Image 
      style = {{width: 50, height: 50}}
      source={icons.watering}
      tintColor="#5BE42A"
    />
  )
}

function SettingsImage() {
  return(
    // <Image
    //   className='w-9 h-9'
    //   tintColor="#5BE42A"
    //   source={icons.setting}
    // />

    <View className='items-center justify-center gap-1 -mt-4'>
      <Image 
        source={icons.setting}
        resizeMode='contain'
        tintColor="#cdcde0"
        className='w-6 h-6'
      />
      <Text className={"text-xs -ml-3 -mr-3"} style={{color: "#cdcde0"}}>
        Settings
      </Text>
    </View>
  )
}


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts ({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect (() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ 
        headerStyle: { backgroundColor: "#161622"},
        headerTitleAlign: 'center', 
        headerTitle: (props) => <LogoTitle {...props} />, 
        headerRight: (props) => (<Link href="settings"> <SettingsImage {...props}/></Link>)}}/> 
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
