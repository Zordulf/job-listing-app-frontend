import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = (props) => {

    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('JobDetails', {jobId: props.id})}>
        <View style={styles.card}>
          <View style={styles.positionContainer}>
            <Text style={styles.position}>{props.position.length > 30 ? props.position.slice(0, 30) + '...' : props.position}</Text>
          </View>
          <View style={styles.imageContainer}>
            <ImageBackground source={{uri: props.src}} style={styles.image}>
              <Text style={styles.salary}>Php {props.salary}</Text>
              <View style={styles.location}>
                <Text style={styles.locationText}>{props.location.length > 12 ? props.location.slice(0, 9) + '...' : props.location}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    fontFamily: 'Ubuntu-Bold',
    fontSize: 18,
    // fontWeight: 'bold',
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
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    color: '#fff',
    margin: 10
  },
  location: {
    margin: 10,
    backgroundColor: '#2652B0',
    height: 25,
    width: 90,
    borderRadius: 5,
    paddingTop: 3
  },
  locationText: {
    fontFamily: 'Ubuntu',
    fontSize: 13,
    color: '#fff',
    textAlign: 'center'
  },
  description: {
    margin: 10
  },
  descriptionText: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    color: 'gray'
  }
});

export default Card;