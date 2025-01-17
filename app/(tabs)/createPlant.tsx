import { View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton"
import FormField from '@/components/FormField';
import "../../global.css"

const CreatePlant = () => {
  const [form, setForm] = useState({
    plant: "",
    preriod: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle= {{height: "100%"}}>
         <View className='w-full justify-center items-center h-full px-4'>
          <View className="relative mt-5">
            <Text className='text-3xl text-white font-bold text-center'>
              Create a <Text className='text-green'>Plant</Text>
            </Text>
          </View>
          <FormField 
              title="Name of the plant"
              value={form.plant}

              handleChangeText={(p:string) => setForm({...form, plant: p})}
              otherStyles="mt-7"
            />

            <FormField 
              title="Watering Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, preriod: p})}
              otherStyles="mt-7"
            /> 

            <FormField 
              title="Furtilizing Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, preriod: p})}
              otherStyles="mt-7"
            /> 

            <FormField 
              title="Re-potting Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, preriod: p})}
              otherStyles="mt-7"
            /> 

          <CustomButton 
            title="Create Plant"
            handlePress={() => {submit}}
            containerStyles="w-full mt-7"
            isLoading= {isSubmitting}
          />
         </View>
         
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default CreatePlant
