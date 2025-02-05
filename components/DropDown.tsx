import { View, Text, TouchableOpacity, FlatList, Modal, VirtualizedList, TouchableWithoutFeedback, Platform } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { AntDesign } from "@expo/vector-icons"


const generateData = (range: number, unit: string) => {
	const ns = Array.apply(null, Array(range)).map(function(x,i) {return i+1;});
	// return Array.apply(null, Array(range)).map(function(x,i) {return ({value: i, label: "Every " + i+1 + " " + unit})})
	return ns.map(i => ({value: i, label: "Every " + i + " " + unit}))
}


const DropDown = ({title, onChange, range, unit}: {title: string, onChange: ((item: number) => void), range: number, unit: string}) => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);
	const buttonRef = useRef<View>(null)
	const [top, setTop] = useState(0)

	const [value, setValue] = useState('')
	const onSelect = useCallback((item: {value: number, label: string}) => {
		onChange(item.value)
		setValue(item.label)
		setExpanded(false)
	}, [])

  return (
	  <View 
	  ref={buttonRef} 
	  className='space-y-2 w-full px-20 justify-center items-center mt-7'
	  onLayout={(event) => {
		const layout = event.nativeEvent.layout;
		const topOffset = layout.y;
		const heightOfComponent = layout.height;

		// const finalValue = topOffset + heightOfComponent + (Platform.OS === "android" ? -32 : 3)

		setTop((topOffset + heightOfComponent))
	  }}
	  >
      <TouchableOpacity
				onPress={toggleExpanded}
				activeOpacity={0.8}
				className='bg-green rounded-xl w-full min-h-[62px] justify-between px-8 items-center flex-row'
			> 
				<Text className='text-primary font-semibold text-lg'>{value || title}</Text>
				<AntDesign name={expanded ? "caretup" : 'caretdown'} />
			</TouchableOpacity>


			{expanded ?
			<Modal visible={expanded} transparent className=''>
				<TouchableWithoutFeedback onPress={() => setExpanded(false)}>
					<View className='flex-1 p-20 justify-center items-center '	>
					{/* <View className={`max-h-64 pt-1 top-[${Math.floor(top)}px]`}> */}
					<View className={` bg-white rounded-xl max-h-64 pt-1 top-[${Math.floor(top)}px] w-full`}>
					<FlatList
						// keyExtractor={(item) => item.value}
						// data={[{value: "1", label: "1"}, {value:"2", label: "2"}]}
						// data={[Math.floor(top), 1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
						data={generateData(range, unit)}
						renderItem={({item}) => (

							<TouchableOpacity 
							activeOpacity={0.8} 
							onPress={() => onSelect(item)}
							className='justify-center py-1'>
								<Text className='px-16 py-1 font-medium text-xl text-primary justify-center items-center flex-row'>{item.label}</Text>
							</TouchableOpacity>
						)} 
						
						ItemSeparatorComponent={()=><View className='h-4 bg-white -my-2'/>}
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