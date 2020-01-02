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
    <View style={styles.card}>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>讨论话题</Text>
        <Text style={styles.headerViewMore}>查看全部 ></Text>
      </View>
      <View>
        {
          [1, 2, 3, 4].map((item, index) => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 10,
              marginBottom: 10,
              borderBottomColor: '#eee',
              borderBottomWidth: .4,
            }}>
              <Image
                source={require('../../../static/image/1.jpg')}
                style={{ width: 50, height: 50, borderRadius: 5, }}
                resizeMode="cover"
              />
              <View style={{ flex: 1, marginLeft: 10, marginLeft: 10, }}>
                <Text>你收到够那些来自陌生人的善意?</Text>
                <Text style={{ color: '#999', fontSize: 12 }}>1212人浏览 / 238人参与</Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
};


export default cart;