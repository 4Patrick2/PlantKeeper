
import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ScrollView } from "react-native"
import "../../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import DropDown from '@/components/DropDown';

const Index = () => {
    return (
        <SafeAreaView className='h-full'>
          <ScrollView contentContainerStyle= {{height: "100%"}}>
            <View className='w-full justify-center items-center px-4'>
              <View className='relative mt-5'>
              <Text className='text-3xl font-extrabold text-center'>
                Feast beyond you plants!
                </Text>
              </View>
              {/* <FlatList
                  data={[{id: 1}, {id: 2}, {id: 4}]}
                  keyExtractor={(item) => item.$id}
                  renderItem={( {item} ) => (
                    <View>
                    <Text className="text-3xl">{item.id}</Text>
                    </View>
                    )}
                    />
                    <StatusBar backgroundColor="#161622" style="light"/> */}
              
              <DropDown/>
            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Index