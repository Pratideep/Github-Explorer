import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoriteScreen';
import RepositoryDetail from './screens/RepositoryDetail';


const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator initialRouteName="Home Screen">
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="RepositoryDetail"
          component={RepositoryDetail}
        />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>

  );
}
