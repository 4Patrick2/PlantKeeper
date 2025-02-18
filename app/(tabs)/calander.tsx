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
    return d
  }

  const extractDatesFert = (p:any) => {
    const d:any = [];
    p.forEach((curent:any) =>
        d.push(curent.fertDate)
    )
    return d
  }

  const extractDatesPot = (p:any) => {
    const d:any = [];
    p.forEach((curent:any) =>
        d.push(curent.fertDate)
    )
    return d
  }

  const dw = extractDates(plants)
  let s = getDateString(dw[0])
  const df = extractDatesFert(plants)
  let f = getDateString(df[0])
  const dp = extractDatesPot(plants)
  let p = getDateString(dp[0])
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
            [s]: {selected: true, marked: true, selectedColor: 'green'},    
            [f]: {selected: true, marked: true, selectedColor: 'blue'},    
            [p]: {selected: true, marked: true, selectedColor: 'red'}    
          }}
          />
      </View>
    </SafeAreaView>
  )
}

export default Calander