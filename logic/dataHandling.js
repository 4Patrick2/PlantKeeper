
import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePlant = async (plantName, wateringPeriod, wateringDate, fertilizingPeriod, fertilizingDate, repotPeriod, repotDate) => {   
    const plant = new Object();
    plant.plant = plant,
    plant.wateringPeriod = wateringPeriod,
    plant.wateringDate = wateringDate,
    plant.fertilizingPeriod = fertilizingPeriod,
    plant.fertilizingDate = fertilizingDate,
    plant.repotPeriod = repotPeriod,
    plant.repotDate = repotDate;

    try {
        const object = JSON.stringify(plant);
        await AsyncStorage.setItem(plant.plantName, object);
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}