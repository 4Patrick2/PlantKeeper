
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePlant = async (plantName: string, wateringPeriod: number, fertilizingPeriod: number, repotPeriod: number) => {   
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    const monthNames =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let waterDate = new Date();
    waterDate.setDate(date.getDate() + wateringPeriod);

    let fertDate = new Date();
    fertDate.setDate(date.getDate() + (fertilizingPeriod * 7));

    let potDate = new Date();
    potDate.setDate(15);
    potDate.setMonth(2);
    potDate.setFullYear(year+Number(repotPeriod))


    let plant = {
        plantName: plantName,
        wateringPeriod: wateringPeriod,
        wateringDate: waterDate,
        fertilizingPeriod: fertilizingPeriod,
        fertilizingDate: fertDate,
        repotPeriod: repotPeriod,
        repotDate: potDate
    }

    try {
        const object = JSON.stringify(plant);
        const key = JSON.stringify(plant.plantName);
        await AsyncStorage.setItem(plantName, object);
    } catch (e) {
        console.log("There is some errors boy");
        throw new Error("error");
    }
}

export default savePlant

export const readPlants = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        if (keys !== null) {
            const plants = await AsyncStorage.multiGet(keys);
            const res = plants.map(req => JSON.parse(req[1]))
            return res
        } 
        return []
    } catch (e) {
        console.log(e);
        throw new Error("e")
    }
}

export const test = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        if (keys !== null) {
            const plants = await AsyncStorage.multiGet(keys);
            return plants
        } 
        return []
    } catch (e) {
        console.log(e);
        throw new Error("e")
    }
}

export const removeAll = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys)
        return true
    } catch (e) {
        console.log(e);
        return false
    }
  }

export const remove = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (e) {
        console.log(e);
        return false
    }
  }

export const daysBetween = (endDate: Date) => {
    let startDate = new Date();
    let difference = new Date(endDate).getTime() - startDate.getTime();
    let res = Math.round(difference / (1000 * 3600 * 24))
    return res;
  }

export const monthsBetween = (endDate: Date) => {
    let startDate = new Date();
    let yearDifference = new Date(endDate).getFullYear() - startDate.getFullYear();
    let months = new Date(endDate).getMonth() - startDate.getMonth() + (yearDifference * 12)
    return months;
  }

export const updateItem = async (item: any, index: number) => {
    try {
        let date = new Date()
        switch (index){
            case 1: // Watering
                item.wateringDate = date.setDate(date.getDate() + item.wateringPeriod); 
            case 2: // Fertilizing
                let newDate = date.setDate(date.getDate() + (item.fertilizingPeriod * 7))
                item.fertilizingDate = new Date(newDate);
            case 3: // Repotting
                let potDate = new Date();
                potDate.setDate(15);
                potDate.setMonth(2);
                potDate.setFullYear(date.getFullYear() + item.repotPeriod)
                item.repotDate = potDate;
        } 
        const jsonString = JSON.stringify(item);
        await AsyncStorage.setItem(item.plantName, jsonString)
    } catch (e) {
        console.log(e)
        throw new Error("Error")
    }
}

export const findTime = (date: Date) => {
  let current = new Date();
  let init = new Date(date);
  let diff = init.getTime() - current.getTime();
  let days = Math.round(diff / (1000 * 3600 * 24));


  if (days < 30 && days > -30) {
      return days + " days"
  } else {
      let initMonth = init.getMonth(); 
      let initYear  = init.getFullYear(); 
      let currentMonth  = current.getMonth(); 
      let currentYear   = current.getFullYear(); 

      let yearDiff = initYear - currentYear;

      if (yearDiff === 0) {
          let months = initMonth - currentMonth
          return months + " months"
      } else {
          let months = (12-initMonth+currentMonth) + (yearDiff-1) * 12
          return months + " months"
      }
  }
}