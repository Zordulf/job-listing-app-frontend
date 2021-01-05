import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//import { useDispatch } from 'react-redux';

//import * as jobsAction from '../redux/actions/jobsAction';

const Card = (props) => {

    //const dispatch = useDispatch();

    return (
        <View style={styles.card}>
          <View style={styles.positionContainer}>
            <Text style={styles.position}>Associate Software Engineer</Text>
          </View>
          <View style={styles.imageContainer}>
            <ImageBackground source={require('../assets/images/softeng.jpg')} style={styles.image}>
              <Text style={styles.salary}>Php 30,000.00</Text>
              <View style={styles.location}>
                <Text style={styles.locationText}>Makati City</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>This is the description.</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    margin: 10
  },
  positionContainer: {
    height: '15%',
    padding: 10
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray'
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  salary: {
    fontSize: 30,
    color: '#fff',
    margin: 10
  },
  location: {
    margin: 10,
    backgroundColor: '#2652B0',
    height: 25,
    width: 80,
    borderRadius: 5
  },
  locationText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  description: {
    margin: 10
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray'
  }
});

export default Card;