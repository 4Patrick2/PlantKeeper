
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import DropDown from '@/components/DropDown';
import { readPlants, test, remove, daysBetween, updateItem, findTime } from '@/logic/dataHandling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import DateDisplay from '@/components/DateDisplay';


const Index = () => {

  const deleteItem = (key) => {
    setIsLoading(true)
    try {
      remove(key)
    } finally {
      setIsLoading(false)
    }
  } 

  const [arr, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
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
                    <View className='my-4 p-2'>
                      <View className='flex-row justify-between m-2'>
                        <Text className='text-green text-3xl font-semibold'>{item.plantName}</Text>

                        <CustomButton 
                          title="Delete"
                          handlePress={() => deleteItem(item.plantName)}
                          containerStyles='w-16 h-10'
                          isLoading= {isLoading}
                        />
                      </View>
                      <View className='flex-row justify-between m-2'>
                        <DateDisplay 
                          subtitle='to wattering!'
                          date={findTime(item.wateringDate)}
                          // handlePress={updateItem(item, 1)}
                          handlePress={() => updateItem(item, 1)}
                          containerStyles='min-h-[62px] w-32'
                        />
                        <DateDisplay 
                          subtitle='to fertilizing!'
                          date={findTime(item.fertilizingDate)}
                          handlePress={() => updateItem(item, 2)}
                          containerStyles='min-h-[62px] w-32'
                        />
                        <DateDisplay 
                          subtitle='to repotting!'
                          date={findTime(item.repotDate)}
                          // handlePress={updateItem(item, 3)}
                          handlePress={() => updateItem(item, 3)}
                          containerStyles='min-h-[62px] w-32'
                        />
                      </View>
                    </View>
                )}

                ListHeaderComponent={() => (
                  <View className='my-6 px-4 space-y-6'>
                    <View className='justify-center items-center '>
                      <Text className='text-3xl font-extrabold text-center text-green'>
                      Feast beyond you plants!
                      </Text>
                    </View>
                  </View>
                )}

                ItemSeparatorComponent={() => (
                  <View className=' justify-center items-center'>
                    <View className='min-w-80 max-w-80 bg-green rounded-xl min-h-1'></View>
                  </View>
                )}
              />
        </SafeAreaView>
    )
}

export default Index