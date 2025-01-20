import { View, Text, TextInput } from 'react-native'
import React from 'react'
import "../global.css"

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...probs}: {title: string, value: string, otherStyles: string}) => {
  return (
    <View className={`space-y-2 ${otherStyles} w-full px-20`}>
      <Text className='text-base text-gray-100 font-medium'>{title}</Text>
      <View className='w-full h-16 px-4 bg-lessblack border-2 border-darkgreen rounded-2xl focus: border-green items-center flex-row'>
      <TextInput
        className='flex-1 text-white font-semibold text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />  
      </View>
    </View>
  )
}

export default FormField