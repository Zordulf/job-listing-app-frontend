import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';

import Card from '../components/Card';
import baseURL  from '../assets/common/baseUrl';

const JobSearchScreen = (props) => {

  const { position } = props.route.params;
  const [jobSearch, setJobSearch] = useState([]);

  const getSearchedJobs = async () => {
    fetch(`${baseURL}search/${position}`)
      .then(res => res.json())
      .then(async (data) => {
        try{
          setJobSearch(data);
        } catch(e) {
          console.log(e);
        }
      })
  }

  useEffect(() => {
    getSearchedJobs();
    console.log(jobSearch);
    return () => {
      setJobSearch([]);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>You have searched for "{position}".</Text>
      <FlatList 
        data={jobSearch}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchText: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default JobSearchScreen;