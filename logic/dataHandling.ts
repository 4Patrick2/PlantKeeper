
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePlant = async (plantName: string, wateringPeriod: number, fertilizingPeriod: number, repotPeriod: number) => {   
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    const monthNames =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let waterDate = new Date();
    waterDate.setDate(date.getDate() + Number(wateringPeriod));

    let fertDate = new Date();
    fertDate.setMonth(date.getMonth() + Number(fertilizingPeriod));

    let potDate = new Date();
    potDate.setDate(15);
    potDate.setMonth(2);
    potDate.setFullYear(year+Number(repotPeriod))

    // new Date("March 15, " + (year + Number(repotPeriod)) + " 12:00:00" );

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
        console.log(plant.repotDate)
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