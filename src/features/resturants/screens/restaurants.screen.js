import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

console.log(StatusBar.currentHeight);

const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.serachContainer}>
      <Searchbar />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  serachContainer: {
    padding: 12,
  },
  listContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: 'red',
  },
  textGeneral: {
    padding: 2,
    marginLeft: 12,
    fontSize: 18,
  },
});

export default RestaurantsScreen;
