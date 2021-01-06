import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

const JobDetailsScreen = (props) => {

  const {jobId} = props.route.params;

  const job = useSelector(state => state.job.jobs.find(job => job._id == jobId));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.position}>{job.position}</Text>
        </View>
        <View>
          <Image source={{uri: job.image}} style={styles.image}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Position: </Text>
          <Text style={styles.value}>{job.position}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Salary: </Text>
          <Text style={styles.value}>Php {job.salary}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Location: </Text>
          <Text style={styles.value}>{job.location}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Skills Required: </Text>
          <Text style={styles.value}>{job.skills}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{job.description}</Text>
        </View>
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
});

export default JobDetailsScreen;