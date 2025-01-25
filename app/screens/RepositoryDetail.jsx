import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RepositoryDetails = ({ route }) => {
  const { repo } = route.params;

  const addToFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      const updatedFavorites = favorites ? JSON.parse(favorites) : [];

      if (!updatedFavorites.some((item) => item.id === repo.id)) {
        updatedFavorites.push(repo);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        Alert.alert('Added to Favorites!');
      } else {
        Alert.alert('Already in Favorites!');
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      Alert.alert('Error', 'Could not add to favorites.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.repoName}>{repo.name}</Text>
      <Text style={styles.repoDescription}>{repo.description || 'No description available.'}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Stars: {repo.stargazers_count}</Text>
        <View style={styles.separator} />
        <Text style={styles.statText}>Forks: {repo.forks_count}</Text>
        <View style={styles.separator} />
        <Text style={styles.statText}>Primary Language: {repo.language || 'N/A'}</Text>
      </View>
      <View style={styles.ownerContainer}>
        <Text style={styles.ownerText}>Owner: {repo.owner.login}</Text>
        <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={addToFavorites}>
        <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  repoName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  repoDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10, // Add vertical margin for spacing
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5, // Space between the separator and text
  },
  ownerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ownerText: {
    fontSize: 16,
    color: '#333',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  favoriteButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  favoriteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RepositoryDetails;