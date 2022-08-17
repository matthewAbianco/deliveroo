import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5" >
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2" >
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bg-gray-300 rounded-full"
                />
                <View className="flex-1" >
                    <Text className="font-bold text-grey-400 text-xs" >Deliver Now!</Text>
                    <Text
                        className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color='#00CCBB' />
            </View>

            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 " >
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3" >
                    <SearchIcon color='gray' size={20} />
                    <TextInput
                        placeholder='Resturants and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon color='#00CCBB' />
            </View>


            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }} >

                <Categories />

                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid Placements from our partners"
                />

                <FeaturedRow
                    id="1234"
                    title="tasty Discounts"
                    description="Paid Placements from our partners"
                />

                <FeaturedRow
                    id="12345"
                    title="Offers near you"
                    description="Paid Placements from our partners"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen