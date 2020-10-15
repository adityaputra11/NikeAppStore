import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Wallet from '@components/Module/Wallet';
import HeaderSearch from '@components/Module/HeaderSearch';
import Discount from '@components/Module/Discount';
import {ScrollView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

const HomeScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <HeaderSearch color="#fff" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.container}>
        <Wallet key={'wallet'} />
        <Discount key={'promo'} title={'Promo'} />
      </ScrollView>
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
