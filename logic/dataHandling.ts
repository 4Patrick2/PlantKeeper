
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePlant = async (plantName: string, wateringPeriod: number, fertilizingPeriod: number, repotPeriod: number) => {   
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: number = date.getMonth();
    const monthNames =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let plant = {
        plantName: plantName,
        wateringPeriod: wateringPeriod,
        wateringDate: new Date().setDate(date.getDate() + Number(wateringPeriod)),
        fertilizingPeriod: fertilizingPeriod,
        fertilizingDate: new Date().setMonth(date.getMonth() + Number(fertilizingPeriod)),
        repotPeriod: repotPeriod,
        repotDate: new Date("March 15, " + (year + Number(repotPeriod)) + "12:00:00" )
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
