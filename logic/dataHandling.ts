
import AsyncStorage from '@react-native-async-storage/async-storage';

const savePlant = async (plantName: string, wateringPeriod: string, fertilizingPeriod: string, repotPeriod: string) => {   
    let plant = {
        plantName: plantName,
        wateringPeriod: wateringPeriod,
        wateringDate: new Date().getDate(),
        fertilizingPeriod: fertilizingPeriod,
        fertilizingDate: new Date().getDate(),
        repotPeriod: repotPeriod,
        repotDate: new Date().getDate()
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