import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HelloWorld</Text>
      <ScrollView style={styles.position} />
    </View>
  );
};

export default DetailScreen;
