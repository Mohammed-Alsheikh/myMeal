import React from 'react';
import {StatusBar} from 'react-native';
import RestaurantsScreen from './src/features/resturants/screens/restaurants.screen';

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
