
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import DropDown from '@/components/DropDown';
import { readPlants } from '@/logic/dataHandling';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getPlants = async () => {
  const plants = await readPlants();
  return plants
}

const logSuff = async () => {
  // const p = getPlants()
  // const keys = await AsyncStorage.getAllKeys();
  // const ps = await AsyncStorage.getItem(keys[2])
  // const o = JSON.parse(ps)

  // const p = await readPlants();
  const keys = await AsyncStorage.getAllKeys();
  const plants = await AsyncStorage.multiGet(keys);
  const res = plants.map((req) => JSON.parse(req))
  console.log("res[0].wateringPeriod")
  // console.log(p[0].wateringPeriod)
}

const Index = () => {
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

              <CustomButton
                title="Print data"
                handlePress={logSuff}
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