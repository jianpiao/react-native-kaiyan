import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import styles from '../style';


const cart = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>今日开眼精选</Text>
        <Text style={styles.headerViewMore}>查看往期 ></Text>
      </View>
      {
        [1, 2, 3, 4].map((item, index) => (
          <View style={styles.card}>
            <ImageBackground source={require('../../../static/image/1.jpg')}
              style={{ width: '100%', height: 200, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}
              imageStyle={{ borderRadius: 5 }}>
              <View style={{ padding: 5, backgroundColor: '#000', margin: 10, borderRadius: 2, }}>
                <Text style={{ color: '#fff' }}>03:50</Text>
              </View>
            </ImageBackground>
            <View style={{
              marginTop: 10,
              paddingBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#ccc',
              borderBottomWidth: .3,
            }}>
              <Image
                source={require('../../../static/image/1.jpg')}
                style={{ width: 50, height: 50, borderRadius: 25, }}
                resizeMode="cover"
              />
              <View style={{
                flex: 1,
                flexDirection: 'column',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
                <Text style={{ fontWeight: 'blod', }}>保持薯片 | 卡大法师地方</Text>
                <Text style={{ color: '#666', fontWeight: '100', }}>开眼视频精选 / #影视</Text>
              </View>
              <Image
                source={require('../../../static/image/1.jpg')}
                style={{ width: 20, height: 20 }}
                resizeMode="cover"
              />
            </View>
          </View>
        ))
      }
    </View>
  )
};


export default cart;