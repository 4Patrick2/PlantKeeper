import { Text, View, FlatList } from "react-native"
import "../global.css"
import { SafeAreaView } from "react-native-safe-area-context"

const Index = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={[{id: 1}, {id: 2}, {id: 4}]}
                keyExtractor={(item) => item.$id}
                renderItem={( {item} ) => (
                    <Text className="text-3xl">{item.id}</Text>
                )}
            />
        </SafeAreaView>
    )
}

export default Index