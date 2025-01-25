// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

// // Add this inside RepositoryDetails.js
// const addToFavorites = async () => {
//   const favorites = await AsyncStorage.getItem('favorites');
//   const updatedFavorites = favorites ? JSON.parse(favorites) : [];

//   if (!updatedFavorites.some((item) => item.id === repo.id)) {
//     updatedFavorites.push(repo);
//     await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     Alert.alert('Added to Favorites!');
//   } else {
//     Alert.alert('Already in Favorites!');
//   }
// };

// // Button to add to favorites
// <TouchableOpacity onPress={addToFavorites}>
//   <Text style={styles.favoriteButton}>Add to Favorites</Text>
// </TouchableOpacity>
