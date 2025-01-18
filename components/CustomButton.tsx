import { Text } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'

import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        className={`bg-green rounded-xl min-h-[62px] justify-center`}
        onPress={handlePress}
        activeOpacity={0.7}
        >
        {/* className={'g-green rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}'}> */}
      <Text className='text-primary font-semibold text-lg'>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton