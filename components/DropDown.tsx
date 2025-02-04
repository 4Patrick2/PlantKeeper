import { View, Text, TouchableOpacity, FlatList, Modal, VirtualizedList, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { AntDesign } from "@expo/vector-icons"

const DropDown = () => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
	const buttonRef = useRef<View>(null)
	const [top, setTop] = useState(0)

  return (
	  
	  <View 
	  ref={buttonRef} 
	  className='space-y-2 w-full justify-center items-center'
	  onLayout={(event) => {
		const layout = event.nativeEvent.layout;
		const topOffset = layout.y;
		const heightOfComponent = layout.height;

		setTop(topOffset + heightOfComponent)
	  }}
	  >
      <TouchableOpacity
				onPress={toggleExpanded}
				activeOpacity={0.8}
				className='bg-green rounded-xl w-80 min-h-[62px] justify-center items-center'
			> 
				<Text className='text-primary font-semibold text-lg'>Select day</Text>
				<AntDesign name={expanded ? "caretup" : 'caretdown'} />
			</TouchableOpacity>


			{expanded ?
			<Modal visible={expanded} transparent>
				<TouchableWithoutFeedback onPress={() => setExpanded(false)}>
					<View className='flex-1 p-20'	>
					<View className={`max-h-64 pt-1 top-[${Math.floor(top)}px]`}>
					<FlatList
						// keyExtractor={(item) => item.value}
						// data={[{value: "1", label: "1"}, {value:"2", label: "2"}]}
						data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
						renderItem={({item}) => (
							<TouchableOpacity 
							activeOpacity={0.8} 
							className='justify-center'>
								<Text className='px-32 font-medium text-lg bg-white text-primary justify-center items-center flex-row w-80'>{item}</Text>
							</TouchableOpacity>
						)} 
						ItemSeparatorComponent={()=><View className='h-2 bg-white w-80'/>}
						/>
				</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
			: null }
		</View>
  )
}

export default DropDown