{/* <import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home> */}


import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"

const Index = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={[{id: 1}, {id: 2}, {id: 4}]}
                keyExtractor={(item) => item.$id}
                renderItem={( {item} ) => (
                  <View>
                    <Text className="text-3xl">{item.id}</Text>
                  </View>
                )}
            />
            <StatusBar backgroundColor="#161622" style="light"/>
        </SafeAreaView>
    )
}

export default Index