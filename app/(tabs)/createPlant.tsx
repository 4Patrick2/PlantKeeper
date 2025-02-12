import { View, Text, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from "../../components/CustomButton"
import FormField from '@/components/FormField';
import savePlant from "../../logic/dataHandling";
import DropDown from '@/components/DropDown';


import "../../global.css"
import { router, Link } from 'expo-router';

const CreatePlant = () => {
  const [form, setForm] = useState({
    plantName: "",
    wateringPeriod: NaN,
    fertilizingPeriod: NaN,
    repotPeriod: NaN,
  });

  const [PN, setPN] = useState("")
  const [WP, setWP] = useState(NaN)
  const [FP, setFP] = useState(NaN)
  const [RP, setRP] = useState(NaN)
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!PN || !WP) {
      Alert.alert("Error", "Plants must have name and watering schedule!")
    }

    setIsSubmitting(true);
  
    try {
      const result = await savePlant(PN, WP, FP, RP);
      router.replace("/calander")
    } catch (e) {
      Alert.alert("Error", "Errors dont work")
      // Alert.alert("Error", e.message)
    } finally {
      setIsSubmitting(false)
    }

    
  }

  const data = [...Array(100).keys()].map((index) => ({
    value: index,
    label: index.toString(),
  }))
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle= {{height: "100%"}}>
         <View className='w-full h-full px-4'>
          <View className="relative mt-5">
            <Text className='text-3xl text-white font-bold text-center'>
              Create a <Text className='text-green'>Plant</Text>
            </Text>
          </View>

          <FormField 
              title="Name of the plant"
              value={PN}
              handleChangeText={(p:string) => setPN(p)}
              // handleChangeText={(p:string) => setForm({...form, plantName: p})}
              otherStyles="mt-7"
            />

            {/* <FormField 
              title="Watering Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, wateringPeriod: p})}
              otherStyles="mt-7"
            />  */}

            <DropDown 
              title="Watering Period"
              // onChange={(water:number) => setForm({...form, wateringPeriod: water})}
              onChange={(water:number) => setWP(water)}
              range={30}
              unit={"days"}
            />

            <DropDown 
              title="Fertilizing Period"
              onChange={(fert:number) => setFP(fert)}
              range={15}
              unit={"weeks"}
            />

            <DropDown 
              title="Re-potting Period"
              onChange={(pot:number) => setRP(pot)}
              range={5}
              unit={"years"}
            />

            {/* <FormField 
              title="Fertilizing Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, fertilizingPeriod: p})}
              otherStyles="mt-7"
            /> 

            <FormField 
              title="Re-potting Period"
              value={form.preriod}
              keyboardType="numeric"
              handleChangeText={(p:string) => setForm({...form, reportPeriod: p})}
              otherStyles="mt-7"
            />  */}


            <CustomButton 
              title="Create Plant"
              handlePress={submit}
              containerStyles="w-full mt-7 min-h-[62px]"
              isLoading= {isSubmitting}
            />
         </View>
         
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default CreatePlant
function resolvePath() {
  throw new Error('Function not implemented.');
}

