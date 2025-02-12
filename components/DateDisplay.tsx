import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

// const DateDisplay = ({subtitle, date, handlePress, containerStyles} : {subtitle: string, date: Date, handlePress: any, containerStyles: string}) => {
const DateDisplay = ({subtitle, date, handlePress, containerStyles} : {subtitle: string, date: string, handlePress: any, containerStyles: string}) => {
//   let diff = findTime(date);
  let num = Number(date.split(" ")[0])
  return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={` rounded-xl justify-center items-center ${containerStyles} ${(num > 0) ? "bg-green" : "bg-red"}`}>
        <View className="justify-center items-center">
            <Text className="font-bold font-3xl underline">{date}</Text>
            <Text className="font-normal font-lg">{subtitle}</Text>
        </View>
    </TouchableOpacity>
  )
}


export default DateDisplay