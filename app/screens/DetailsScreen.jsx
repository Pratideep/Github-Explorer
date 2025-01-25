// screens/DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { repo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{repo.name}</Text>
      <Text>{repo.description || 'No description available.'}</Text>
      <Text>⭐ Stars: {repo.stargazers_count}</Text>
      <Text>🍴 Forks: {repo.forks_count}</Text>
      <Text>🛠 Language: {repo.language}</Text>
      <Text>👤 Owner: {repo.owner.login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  avatar: { width: 100, height: 100, alignSelf: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
});

export default DetailsScreen;
