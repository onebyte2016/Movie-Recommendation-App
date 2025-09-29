import { icons } from '@/constants/icons'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const saved = () => {
  const [movies, setMovies] = useState([
    { id: '1', title: 'Inception', year: 2010, poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { id: '2', title: 'Interstellar', year: 2014, poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { id: '3', title: 'The Dark Knight', year: 2008, poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: '4', title: 'Tenet', year: 2020, poster: 'https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg' },
    { id: '5', title: 'Avengers: Endgame', year: 2019, poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
    { id: '6', title: 'The Matrix', year: 1999, poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { id: '7', title: 'John Wick 4', year: 2023, poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
    { id: '8', title: 'Oppenheimer', year: 2023, poster: 'https://image.tmdb.org/t/p/w500/bAFmcrxSubh71rJRXf2f6pFIj6l.jpg' },
    { id: '9', title: 'Dune: Part Two', year: 2024, poster: 'https://image.tmdb.org/t/p/w500/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg' },
    { id: '10', title: 'Gladiator II', year: 2024, poster: 'https://image.tmdb.org/t/p/w500/5L7GzBeBfFi5QmX2MIkZ4c4RZkY.jpg' },
  ])

  const clearAll = () => {
    setMovies([])
  }

  return (
    <View className="bg-primary flex-1 px-5">
      {/* Header */}
      <View className="flex justify-center items-center mt-10 mb-5">
        <Image source={icons.save} className="size-12" tintColor="#FFF" />
        <Text className="text-gray-200 text-lg font-semibold mt-2">Saved Movies</Text>
      </View>

      {/* List */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-800 rounded-xl p-3 mb-3 flex-row items-center">
            <Image
              source={{ uri: item.poster }}
              style={{ width: 60, height: 90, borderRadius: 8 }}
              resizeMode="cover"
            />
            <View className="ml-4 flex-1">
              <Text className="text-white text-base font-semibold">{item.title}</Text>
              <Text className="text-gray-400 text-sm mt-1">{item.year}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Clear All Button */}
      {movies.length > 0 && (
        <View className="absolute bottom-24 left-5 right-5">
          <TouchableOpacity
            onPress={clearAll}
            className="bg-red-500 p-4 rounded-xl"
          >
            <Text className="text-white text-center font-bold">Clear All</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default saved

const styles = StyleSheet.create({})







// import { icons } from '@/constants/icons'
// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'

// const saved = () => {
//   return (
//     <View className='bg-primary flex-1 px-10'>
//           <View className='flex justify-center items-center flex-1 flex-col gap-5'>
//             <Image source={icons.save} className="size-10" tintColor="#Fff" />
//             <Text className='text-gray-500 text-base'>Save</Text>
//           </View>
          
//         </View>
//   )
// }

// export default saved

// const styles = StyleSheet.create({})