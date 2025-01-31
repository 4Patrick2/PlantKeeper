import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useCallback, useState } from 'react'
import { AntDesign } from "@expo/vector-icons"

const DropDown = () => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
  return (
		// <Modal visible={expanded}>

    <View className='space-y-2 w-full'>
      <TouchableOpacity
				onPress={toggleExpanded}
				activeOpacity={0.8}
				className='bg-green rounded-xl w-80 min-h-[62px] justify-center items-center'
			> 
				<Text className='text-primary font-semibold text-lg'>Select day</Text>
				<AntDesign name={expanded ? "caretup" : 'caretdown'} />
			</TouchableOpacity>
			if (expanded)  {
				<View className='m-2 absolute p-10'>
					<FlatList
						// keyExtractor={(item) => item.value}
						// data={[{value: "1", label: "1"}, {value:"2", label: "2"}]}
						data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
						renderItem={({item}) => (
							<TouchableOpacity 
								activeOpacity={0.8} 
								className='h-48 justify-center'>
								<Text className='font-medium text-lg bg-white text-primary justify-center items-center flex-row w-80'>{item}</Text>
							</TouchableOpacity>
						)} 
						ItemSeparatorComponent={()=><View className='h-4'/>}
					/>
				</View>
			} else { null }
		</View>
		// </Modal>
  )
}

export default DropDown