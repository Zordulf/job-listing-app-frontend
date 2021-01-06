import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import * as jobAction from '../redux/actions/jobAction';

const JobListScreen = (props) => {

  const dispatch = useDispatch();
  const {jobs} = useSelector(state => state.job);

  useEffect(() => {
    dispatch(jobAction.fetchJobs());
  }, [dispatch]);

  return (
    <View style={styles.container}>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default JobListScreen;