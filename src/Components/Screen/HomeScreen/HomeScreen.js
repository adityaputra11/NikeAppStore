import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native';

const HomeScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
