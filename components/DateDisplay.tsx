import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const updateItem = () => {
    // return false
}

const findTime = (date: Date) {
    // return "X days" or "X months"
    return "15 days"
}

const DateDisplay = ({item, context, date} : {item: any; context: string, date: Date}) => {
  return (
    <TouchableOpacity
        onPress={updateItem}
        activeOpacity={0.7}
        className={""}>
    <View>
        <Text>{findTime(date)}</Text>
        <Text>{context}</Text>
    </View>
    </TouchableOpacity>
  )
}


export default DateDisplay