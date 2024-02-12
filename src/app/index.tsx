import CategoryButton from "@/components/categoryButton"
import Header from "@/components/header"
import {View, FlatList} from "react-native"
import { CATEGORIES } from "@/utils/data/products"
import { useState } from "react"


export default function Home(){

    const [category, setCategory] = useState(CATEGORIES[0])

    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory)
    }

    return (
        <View className="flex-1 pt-8">
            <Header title="Faça seu pedido" cartQuantity={1}/>
            
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <CategoryButton title={item} onPress={() => handleCategorySelect(item)} isSelected={item === category}/>
                )}
                horizontal
                className="max-w-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={ { gap: 12 , paddingHorizontal: 20} }
            />
        </View>
    )
}