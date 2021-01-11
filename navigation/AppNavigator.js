import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AboutScreen from '../screens/AboutScreen';
import AddJobScreen from '../screens/AddJobScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import JobListScreen from '../screens/JobListScreen';
import JobSearchScreen from '../screens/JobSearchScreen';
import UpdateJobScreen from '../screens/UpdateJobScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="JobList"
        component={JobListScreen}
        options={{title: 'Job Hunter'}}
      />
      <Stack.Screen
        name="JobSearch"
        component={JobSearchScreen}
        options={{title: 'Job Search'}}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        options={{title: 'Job Details'}}
      />
      <Stack.Screen
        name="AddJob"
        component={AddJobScreen}
        options={{title: 'Add Job'}}
      />
      <Stack.Screen
        name="UpdateJob"
        component={UpdateJobScreen}
        options={{title: 'Update Job'}}
      />
    </Stack.Navigator>
  );
}

function aboutStackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
      />
    </Stack.Navigator>
  );
}

function dashboardNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if(route.name == 'Home') {
            iconName = 'home'
          } else if (route.name == 'About') {
            iconName = 'info'
          }
          return <MaterialIcons name={iconName} size={24} color='#72bcd4'/>
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={stackNavigator}
      />
      <Tab.Screen
        name="About"
        component={aboutStackNavigator}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}  
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="Home"
          component={dashboardNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;