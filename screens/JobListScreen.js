import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../components/Card';
import Header from '../components/Header';
import baseURL  from '../assets/common/baseUrl';

const JobListScreen = (props) => {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  const isFocused = useIsFocused();

  // search job
  const searchJob = (key) => {
    props.navigation.navigate('JobSearch', {position: key})
  }

  const getJobs = async () => {
    fetch(`${baseURL}`)
      .then(res => res.json())
      .then(async (data) => {
        try{
          setJobs(data);
        } catch (e) {
          console.log(e);
        }
      })
  }

  useEffect(() => {
    getJobs();

    // console.log(jobs);

    return () => {
      setJobs([]);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Header title = 'Start Your Job Hunting Journey!'/>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder = 'Search Job'
          value = {search}
          style = {styles.search}
          onChangeText = {(text) => setSearch(text)}
        />
        <MaterialIcons 
          name={'search'} 
          size={35} 
          color='#72bcd4' 
          style={styles.searchIcon}
          // onPress={() => console.log(search)}
          onPress={() => searchJob(search)}
        />
      </View>
      <FlatList 
        data={jobs}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <Card 
            id = {item._id}
            navigation={props.navigation} 
            src={item.image} 
            position={item.position}
            salary={item.salary}
            location={item.location}
            description={item.description}
          />
        )}
      />
      <FloatingAction 
        position="right"
        //animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate('AddJob')}
        color='#72bcd4'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 5,
    flexDirection: 'row'
  },
  search: {
    flex: 1,
    fontFamily: 'Ubuntu',
    fontSize: 20,
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  searchIcon: {
    paddingVertical: 8,
    paddingRight: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }

});

export default JobListScreen;