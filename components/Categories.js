import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* <Text>Categories</Text> */}
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="sausage" />

        </ScrollView>
    )
}

export default Categories