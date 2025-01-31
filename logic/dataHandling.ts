
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePlant = async (plantName: string, wateringPeriod: string, fertilizingPeriod: string, repotPeriod: string) => {   
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
        console.log(e);
        throw new Error("error");
    }
}

export default savePlant