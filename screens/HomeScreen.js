import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'



const HomeScreen = () => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState()


    useEffect(() => {
        sanityClient.
            fetch(
                ` *[_type == "featured"  ]{
                    ...,
                   restaurants[]->{
                     ...,
                     dishes[]->,
                     type-> {
                        ...,
                     }
                   }, 
                 } `).then((data) => {
                    setFeaturedCategories(data)
                })
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
                    <MagnifyingGlassIcon color='#00CCBB' />
                    <TextInput
                        placeholder='Resturants and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB' />
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }} >

                {/* Categories */}

                <Categories />


                {/* Featured */}

                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category.id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen