import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const CreatePlant = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle= {{height: "100%"}}>
         <View className='w-full justify-center items-center h-full px-4'>
          <View className="relative mt-5">
            <Text className='text-3xl text-white font-bold text-center'>
              Create a <Text className='text-green'>Plant</Text>
            </Text>
          </View>
          <CustomButton 
            handlePress={() => {}}
            title="Create Plant"
            containerStyles="w-full mt-7"
          />
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreatePlant