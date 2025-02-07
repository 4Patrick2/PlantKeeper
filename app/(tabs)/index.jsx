
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
    loadData()

    return (
        <SafeAreaView className='h-full bg-primary'>
            {/* <View className='w-full justify-center items-center px-4 '>
              <View className='relative mt-2'>
              <Text className='text-3xl font-extrabold text-center text-green'>
                Feast beyond you plants!
                </Text>
              </View>
                    {/* <StatusBar backgroundColor="#161622" style="light"/> */}
              {/* <FlatList
                data={arr}
                renderItem={({item}) => (
                  <View className='w-full min-w-64 justify-between border-indigo-500 border-solid grid grid-flow-col grid-rows-3 gap-4 bg-green rounded-xl'>
                    <Text className='text-white row-span-3 text-xl w-16'>{item.plantName}</Text>
                    <Text className='text-white row-span-3 w-16'>{item.wateringPeriod}</Text>
                    <Text className='text-white row-span-3 w-16'>{item.fertilizingPeriod}</Text>
                  </View>
                )}
              /> */}

              {/* <CustomButton
                title="Print data"
                handlePress={loadData}
                containerStyles='w-full mt-7'
                textStyles=''
                isLoading={false}
              />
            </View> */}

            <FlatList
                data={arr}
                renderItem={({item}) => (
                  //flex-row
                  // <View className='m-2 border-green p-2 border-solid border-2 grid grid-flow-col grid-rows-2 gap-4  rounded-xl'> 
                  //   <Text className='text-white row-span-3 text-xl '>{item.plantName}</Text>
                  //   <Text className='text-white col-span-2 '>{item.wateringPeriod}</Text>
                  //   <Text className='text-white col-span-2 row-span-2'>{item.fertilizingPeriod}</Text>
                  // </View>
      

                    // <View className='grid grid-cols-2 grid-rows-3 gap-4'>
                    //   <Text className=''>{item.plantName}</Text>
                    //   <Text className=''>{item.wateringDate}</Text>
                    //   <Text className='col-start-2'>{item.fertilizingDate}</Text>
                    //   <Text className='col-start-2 row-start-3'>{item.repotDate}</Text>
                    // </View> 
                    
                    <View className='flex-row justify-between m-2 border-2 rounded-xl border-green p-2'>
                      <Text className='text-green text-xl font-semibold'>{item.plantName}</Text>
                      <View className=''>
                        <Text className='text-white text-lg font-light'>{item.wateringDate}</Text>
                        <Text className='text-white text-lg font-light'>{item.fertilizingDate}</Text>
                        <Text className='text-white text-lg font-light'>{item.repotDate}</Text>
                      </View>
                    </View>
                )}

                ListHeaderComponent={() => (
                  <View className='my-6 px-4 space-y-6'>
                    <View className='justify-between items-start'>
                      <Text className='text-3xl font-extrabold text-center text-green'>
                      Feast beyond you plants!
                      </Text>
                    </View>
                  </View>
                )}
              />
        </SafeAreaView>
    )
}

export default Index