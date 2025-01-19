import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

// const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
// const CustomButton = ({title}: {title: string}) => {
const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}: {title: string, containerStyles: string, textStyles: string, isLoading: boolean}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7} 
        disabled={isLoading}
        className={`bg-green rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}>
      <Text 
      // className='text-primary font-semibold text-lg'
      className={`${textStyles} text-primary font-semibold text-lg`}
      >
      {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton