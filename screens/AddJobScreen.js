import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import * as jobAction from '../redux/actions/jobAction';

const formSchema = yup.object({
  position: yup.string().required().min(3).max(50),
  salary: yup.number().required(),
  location: yup.string().required().min(10).max(50),
  skills: yup.string().required(),
  description: yup.string().required().min(10),
  image: yup.string().required()
});

const AddJobScreen = () => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      // behavior="padding"
      keyboardVerticalOffset={100}
      style={{flex:1}}
    >
      <ScrollView>
        <Formik
          initialValues={{
            position: '',
            salary: '',
            location: '',
            skills: '',
            description: '',
            image: ''
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            // console.log(values);
            dispatch(jobAction.createJob(values))
              .then(() => {
                Alert.alert('Job created successfully!');
              })
              .catch(() => {
                Alert.alert('An error occurred, please try again.', [{text: 'OK'}]);
              })
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Position</Text>
                <TextInput 
                  style={styles.input}
                  onChangeText={props.handleChange('position')}
                  onBlur={props.handleBlur('position')}
                  value={props.values.position}
                />
                <Text style={styles.errorMsg}>{props.touched.position && props.errors.position}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Salary</Text>
                <TextInput 
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={props.handleChange('salary')}
                  onBlur={props.handleBlur('salary')}
                  value={props.values.salary}
                />
                <Text style={styles.errorMsg}>{props.touched.salary && props.errors.salary}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Location</Text>
                <TextInput 
                  style={styles.input}
                  onChangeText={props.handleChange('location')}
                  onBlur={props.handleBlur('location')}
                  value={props.values.location}
                />
                <Text style={styles.errorMsg}>{props.touched.location && props.errors.location}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Skills Required</Text>
                <TextInput 
                  style={styles.input} 
                  multiline
                  onChangeText={props.handleChange('skills')}
                  onBlur={props.handleBlur('skills')}
                  value={props.values.skills}
                />
                <Text style={styles.errorMsg}>{props.touched.skills && props.errors.skills}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                  style={styles.input} 
                  multiline
                  onChangeText={props.handleChange('description')}
                  onBlur={props.handleBlur('description')}
                  value={props.values.description}
                />
                <Text style={styles.errorMsg}>{props.touched.description && props.errors.description}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput 
                  style={styles.input}
                  onChangeText={props.handleChange('image')}
                  onBlur={props.handleBlur('image')}
                  value={props.values.image}
                />
                <Text style={styles.errorMsg}>{props.touched.image && props.errors.image}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button 
                  title="Add Job"
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10
  },
  formGroup: {
    width: '100%'
  },
  label: {
    fontFamily: 'Ubuntu',
    marginVertical: 10
  },
  input: {
    fontFamily: 'Ubuntu',
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  buttonContainer: {
    marginTop:20
  },
  errorMsg: {
    fontFamily: 'Ubuntu',
    color: 'red'
  }
});

export default AddJobScreen;