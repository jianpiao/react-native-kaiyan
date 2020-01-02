import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import styles from '../style';

const cart = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.card, styles.cardLine]}>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>精选社区</Text>
        <Text style={styles.headerViewMore}>查看全部</Text>
      </View>
      <View style={{ flexDirection: 'row', }}>
        <Image
          source={require('../../../static/image/1.jpg')}
          style={{ flex: 1, width: '100%', height: 203, borderRadius: 5, }}
          resizeMode="cover"
        />
        <View style={{ flex: 1, marginLeft: 3, }}>
          <Image
            source={require('../../../static/image/1.jpg')}
            style={{ width: '100%', height: 100, borderRadius: 5, }}
            resizeMode="cover"
          />
          <Image
            source={require('../../../static/image/1.jpg')}
            style={{ width: '100%', height: 100, marginTop: 3, borderRadius: 5, }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  )
};


export default cart;