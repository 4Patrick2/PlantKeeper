
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import DropDown from '@/components/DropDown';
import { readPlants, test, removeAll, daysBetween, monthsBetween } from '@/logic/dataHandling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';






const Index = () => {
  [res, setRes] = useState(false)
  const remove = async () => {
    const r = await removeAll();
    setRes(r)
  }

    const reset = () => {
      return false
    }

  const [arr, setItems] = useState([]);
  
  const loadData = async () => {
    const plants = await readPlants()
    setItems(plants)
  }
    loadData()

    return (
        <SafeAreaView className='h-full bg-primary'>
            <FlatList
                data={arr}
                renderItem={({item}) => (        
                    // <View className='flex-row justify-between m-2 border-2 rounded-xl border-green p-2'>
                    //   <Text className='text-green text-xl font-semibold'>{item.plantName}</Text>
                    //   <View className=''>
                    //     <Text className='text-white text-lg font-light'>
                    //     {daysBetween(item.wateringDate)} days to watering!
                    //     </Text>
                    //     <Text className='text-white text-lg font-light'>
                    //     {daysBetween(item.fertilizingDate)} days to fertilizing!</Text>
                    //     <Text className='text-white text-lg font-light'>
                    //     {monthsBetween(item.repotDate)} months to repotting!</Text>
                    //   </View>
                    // </View>
                    <View className='my-4 border-2 rounded-xl border-green p-2'>
                      <View className='flex-row justify-between m-2'>
                        <Text className='text-green text-xl font-semibold'>{item.plantName}</Text>
                        <CustomButton 
                          title="Delete"
                          handlePress={removeAll}
                          containerStyles='w-16'
                        />
                      </View>
                      <View className='flex-row justify-between m-2'>
                        <CustomButton 
                          title={daysBetween(item.wateringDate)}
                          handlePress={reset}
                          containerStyles='w-24'
                        />
                        <CustomButton 
                          title={daysBetween(item.fertilizingDate)}
                          handlePress={reset}
                          containerStyles='w-24'
                        />
                        <CustomButton 
                          title={daysBetween(item.repotDate)}
                          handlePress={reset}
                          containerStyles='w-24'
                        />
                      </View>
                    </View>
                )}

                ListHeaderComponent={() => (
                  <View className='my-6 px-4 space-y-6'>
                    <View className='justify-between items-start'>
                      <Text className='text-3xl font-extrabold text-center text-green'>
                      Feast beyond you plants!
                      </Text>
                      {/* <CustomButton 
                        title="Remove all plants :("
                        handlePress={remove()}
                        containerStyles='w-80 mt-4'
                        isLoading={false}
                      /> */}
                    </View>
                  </View>
                )}
              />
        </SafeAreaView>
    )
}

export default Index