
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import DropDown from '@/components/DropDown';
import { readPlants, test } from '@/logic/dataHandling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';







const Index = () => {
  const [arr, setItems] = useState([]);
  
  const loadData = async () => {
    const plants = await readPlants()
    setItems(plants)
  }


    return (
        <SafeAreaView className='h-full'>
          {/* <ScrollView contentContainerStyle= {{height: "100%"}}> */}
            <View className='w-full justify-center items-center px-4'>
              <View className='relative mt-5'>
              <Text className='text-3xl font-extrabold text-center'>
                Feast beyond you plants!
                </Text>
              </View>
              {/* <FlatList
                  data={plants}
                  keyExtractor={(item) => item}
                  renderItem={( {item} ) => (
                    <View>
                    <Text className="text-3xl">{item.id}</Text>
                    </View>
                    )}
                    />
                    <StatusBar backgroundColor="#161622" style="light"/> */}

              <FlatList
                data={arr}
                renderItem={({item}) => (
                  <View>
                    <Text>{item.plantName}</Text>
                    <Text>{item.wateringPeriod}</Text>
                    <Text>{item.fertilizingPeriod}</Text>
                  </View>
                )}
              />

              <CustomButton
                title="Print data"
                handlePress={loadData}
                containerStyles='w-full mt-7'
                textStyles=''
                isLoading={false}
              />
            </View>
          {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Index