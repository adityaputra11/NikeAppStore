import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native';
import Carousel from '@components/Modules/Carousel';
import Preview from '@components/Modules/Carousel/Preview';
import Product from '@components/Modules/Product';

const HomeScreen = () => {
  useEffect(() => {}, []);

  const images = [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.coloredContainer}>
        <Text>Nike App Store</Text>
        <Carousel
          data={images}
          width={275}
          timer={5000}
          component={<Preview />}
          onPress={(item) => alert(JSON.stringify(item))}
          contentContainerStyle={{paddingHorizontal: 16}}
          indicatorActiveColor={'#000'}
          animation
        />
        <Product />
      </View>
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
