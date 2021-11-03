import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const RestaurantInfoCard = ({restaurant = {}}) => {
  //we create object and sign properties inside it
  const {
    name = 'some text',
    icons,
    photos = [
      'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluayUyMGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      ,
    ],
    address = 'somewhere ...',
    isOpenNow = true,
    rating = 4,
    isClosedTemprarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    padding: 12,
  },
});

export default RestaurantInfoCard;
