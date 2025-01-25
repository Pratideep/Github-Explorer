import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRepositories = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      const data = response.data;
      
      if (data.length === 0) {
        setError('No repositories found. Try a different keyword.');
      } else {
        setRepositories(data);
      }
      setRepositories(data.items);
    } catch (error) {
      if (!error.response) {
        Alert.alert('Error', 'Failed to fetch repositories. Please check your internet connection.');
        throw new Error('Network Error');
      } else {
        Alert.alert('API Error');
        throw new Error('API Error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChange={setQuery} onSubmit={searchRepositories} />
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('RepositoryDetail', { repo: item })}
              style={styles.repoItem}
            >
              <View style={styles.repoHeader}>
                <Text style={styles.repoName}>{item.name}</Text>
                <Text style={styles.stars}>{item.stargazers_count} ⭐</Text>
              </View>
              <Text style={styles.repoDescription}>{item.description || 'No description available'}</Text>
              <Text style={styles.repoOwner}>By {item.owner.login}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  repoItem: {
    marginBottom: 15,
    padding: 15,
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
  repoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repoName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  stars: {
    color: '#ffcc00',
  },
  repoDescription: {
    marginTop: 5,
    color: '#666',
  },
  repoOwner: {
    marginTop: 5,
    fontStyle: 'italic',
    color: '#999',
  },
});

export default SearchScreen;


      {/* <TextInput
        style={styles.input}
        placeholder="Search GitHub Repositories"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchRepositories}
      /> */}