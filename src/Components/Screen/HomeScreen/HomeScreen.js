import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {StatusBar} from 'react-native';

const HomeScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
