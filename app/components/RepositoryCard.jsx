// components/RepositoryCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RepositoryCard = ({ repo, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(repo)}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{repo.name}</Text>
        <Text style={styles.description}>{repo.description || 'No description'}</Text>
        <Text>⭐ {repo.stargazers_count}  |  🍴 {repo.forks_count}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginVertical: 8, padding: 10, borderWidth: 1, borderRadius: 5 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { marginLeft: 10, flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  description: { color: '#555' },
});

export default RepositoryCard;
