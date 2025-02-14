import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { readPlants, getDateString } from '@/logic/dataHandling';


const Calander = () => {
  const [selected, setSelected] = useState('');
  const [plants, setPlants] = useState([]);
  const [dates, setDates] = useState([]);
  
  
  
  const loadData = async () => {
    const p = await readPlants()
    setPlants(p)
  }
  loadData()

  const extractDates = (p:any) => {
    const d:any = [];
    p.forEach((curent:any) =>
        d.push(curent.wateringDate)
    )
    // setDates(d);
    return d
  }
  const d = extractDates(plants)
  let s = getDateString(d[0])
  return (
    <SafeAreaView className='h-full bg-primary'>
      <View className='pt-16 mx-8'> {/* items-center justify-center pt-16 mx-8 */}
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: '#161622',
            height: 350
            
          }}
          theme={{
            backgroundColor: '#161622',
            calendarBackground: '#161622',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#dd99ee'
          }}
          
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'green'},
            "2025-02-05": {selected: true, marked: true, selectedColor: 'green'},
            [s]: {selected: true, marked: true, selectedColor: 'green'}
          }}
          />
      </View>
    </SafeAreaView>
  )
}

export default Calander