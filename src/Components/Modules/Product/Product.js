import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {Promo} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const Product = (props) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(Promo);
  useEffect(() => {
    setMenu(Promo);
  }, []);
  const onPressDetail = (item) => {
    navigation.navigate('DetailScreen', {item});
  };
  const onPressMore = () => {
    navigation.navigate('FeedScreen');
  };
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={() => onPressDetail(item)}>
        <View style={styles.item}>
          <Image
            source={{uri: item.image}}
            // resizeMode={'contain'}
            style={styles.sliderItems}
          />
        </View>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowTitle} />
      <FlatList
        keyExtractor={keyExtractor}
        horizontal
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').width * 0.5}
        data={menu}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Product;
