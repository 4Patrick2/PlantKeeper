import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';


const Calander = () => {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView className='h-full bg-primary'>
      <Calendar
        style={{
          borderColor: "primary"
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
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />
    </SafeAreaView>
  )
}

export default Calander