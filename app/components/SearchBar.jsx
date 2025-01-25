// components/SearchBar.js
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Image,Text } from 'react-native';

const SearchBar = ({ value, onChange, onSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('../assets/search-icon.jpg')} 
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search GitHub Repositories"
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputFocused: {
    borderColor: '#007bff', // Change border color when focused
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  iconContainer: {
    paddingRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SearchBar;