import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button, Alert } from 'react-native';

import baseURL from '../assets/common/baseUrl';

const JobDetailsScreen = (props) => {

  const {jobId} = props.route.params;
  const [jobDetail, setJobDetail] = useState([]);
       
  const getDetails = async () => {
    fetch(`${baseURL}${jobId}`)
      .then(res => res.json())
      .then(async (data) => {
        try {
          setJobDetail(data);
        } catch(e) {
          console.log(e);
        }
      })
  }

  const deleteJob = async () => {
    fetch(`${baseURL}${jobId}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(async (data) => {
        try {
          Alert.alert('Job deleted successfully!')
        } catch(e) {
          Alert.alert('An error occurred, please try again.', [{text: 'OK'}]);
          console.log(e);
        }
      })
  }

  useEffect(() => {
    getDetails();
    return () => {
      setJobDetail([]);
    }
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.position}>{jobDetail.position}</Text>
        </View>
        <View>
          <Image source={{uri: jobDetail.image}} style={styles.image}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Position: </Text>
          <Text style={styles.value}>{jobDetail.position}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Salary: </Text>
          <Text style={styles.value}>Php {jobDetail.salary}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Location: </Text>
          <Text style={styles.value}>{jobDetail.location}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Skills Required: </Text>
          <Text style={styles.value}>{jobDetail.skills}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{jobDetail.description}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Update Job"
          onPress={() => props.navigation.navigate('UpdateJob', {jobId: jobDetail._id})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color='red'
          title="Delete Job"
          onPress={() => deleteJob().then(() => {props.navigation.navigate('JobList')})}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:  20
  },
  heading: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  position: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200
  },
  group: {
    marginVertical:  10,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  label: {
    fontFamily: 'Ubuntu',
    fontSize: 18
  },
  value: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 18,
    flexShrink: 1
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 5
  },
});

export default JobDetailsScreen;