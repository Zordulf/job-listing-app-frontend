import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AboutScreen from '../screens/AboutScreen';
import AddJobScreen from '../screens/AddJobScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import JobListScreen from '../screens/JobListScreen';

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
        name="JobDetails"
        component={JobDetailsScreen}
        options={{title: 'Job Details'}}
      />
      <Stack.Screen
        name="AddJob"
        component={AddJobScreen}
        options={{title: 'Add Job'}}
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

function AppNavigator() {
  return(
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default AppNavigator;