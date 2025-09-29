import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Profile = () => {
  const router = useRouter();

  const handleLogout = () => {
    
    // 🧹 TODO: Clear authentication tokens, user data, etc.
    // Example: await SecureStore.deleteItemAsync("authToken");

    // Redirect to login screen
    router.replace("/index"); 
  };

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View className="justify-center items-center mb-10">
          <Image
            source={icons.person}
            className="w-24 h-24 rounded-full"
            tintColor="#fff"
          />
          <Text className="text-white text-xl font-semibold mt-4">
            Emmanuel Ogbonna
          </Text>
          <Text className="text-gray-400 text-sm mt-1">
            ogboemmandu@gmail.com
          </Text>
        </View>

        {/* Bio */}
        <View className="bg-dark-200 p-4 rounded-2xl mb-8">
          <Text className="text-gray-300 text-sm leading-5">
            Passionate about movies, coding, and building cool apps with React
            Native. Always learning, always exploring!
          </Text>
        </View>

        {/* Quick Actions */}
        <View className="gap-4">
          <TouchableOpacity className="bg-dark-100 p-4 rounded-xl flex-row items-center" onPress={router.back}>
            <Image source={icons.save} className="w-6 h-6" tintColor="#fff"  />
            <Text className="text-white ml-3 text-base">Saved Movies</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-dark-100 p-4 rounded-xl flex-row items-center">
            <Image source={icons.search} className="w-6 h-6" tintColor="#fff" />
            <Text className="text-white ml-3 text-base">Discover</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-dark-100 p-4 rounded-xl flex-row items-center">
            <Image source={icons.home} className="w-6 h-6" tintColor="#fff" />
            <Text className="text-white ml-3 text-base">Settings</Text>
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity
            // onPress={handleLogout}
            className="bg-red-600 p-4 rounded-xl flex-row items-center justify-center mt-6"
          onPress={router.back}>
            <Text className="text-white text-base font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});






// import { icons } from '@/constants/icons'
// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'

// const profile = () => {
//   return (
//     <View className='bg-primary flex-1 px-10'>
//       <View className='flex justify-center items-center flex-1 flex-col gap-5'>
//         <Image source={icons.person} className="size-10" tintColor="#Fff" />
//         <Text className='text-gray-500 text-base'>profile</Text>
//       </View>
      
//     </View>
//   )
// }

// export default profile

// const styles = StyleSheet.create({})