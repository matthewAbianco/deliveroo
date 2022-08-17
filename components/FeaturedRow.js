import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturauntCard from './ResturauntCard'

const FeaturedRow = ({ title, description, id }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4" >
                <Text className="font-bold text-lg" >{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4" >{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                <ResturauntCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Rony's"
                    rating={3.5}
                    genre='Italian'
                    address="56 Townstead Dr"
                    short_description='Like other resturants, but better.'
                    dishes={[]}
                    long={132}
                    lat={3}
                />


                <ResturauntCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Rony's"
                    rating={3.5}
                    genre='Italian'
                    address="56 Townstead Dr"
                    short_description='Like other resturants, but better.'
                    dishes={[]}
                    long={132}
                    lat={3}
                />


                <ResturauntCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Rony's"
                    rating={3.5}
                    genre='Italian'
                    address="56 Townstead Dr"
                    short_description='Like other resturants, but better.'
                    dishes={[]}
                    long={132}
                    lat={3}
                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow