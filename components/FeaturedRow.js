import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturauntCard from './ResturauntCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setResturants] = useState([])


    useEffect(() => {
        client.fetch(`
        *[_type == "featured" && _id == id ]{
            ...,
           restaurants[]->{
             ...,
             dishes[]->,
             type-> {
                 name
             }
           }, 
         }[0]
        `,
            { id: '' })
            .then((data) => {
                console.log(data)
                setResturants(data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    // console.log(restaurants)

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

                {
                    restaurants?.map((restaurant => {
                        <ResturauntCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            address={restaurant.address}
                            title={restaurant.name}
                            dishes={restaurant.dishes}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            short_description={restaurant.short_description}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    }))
                }

            </ScrollView>
        </View>
    )
}

export default FeaturedRow

