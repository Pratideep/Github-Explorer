import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryCard from '../components/RepositoryCard';

const RepositoryList = ({ navigation, repositories }) => {
  const handlePress = (repo) => {
    navigation.navigate('RepositoryDetails', { repo });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RepositoryCard repo={item} onPress={handlePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default RepositoryList;
