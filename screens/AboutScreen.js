import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Developed by Zorell Gerente, NKPI-IT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AboutScreen;