import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import styles from '../style';
const screenWidth = Dimensions.get('window').width;

const cart = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>推荐主题</Text>
        <Text style={styles.headerViewMore}>查看全部 ></Text>
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10, }}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <View
              key={index}
              style={{
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
                <Text>#黄</Text>
                <Text style={{ color: '#999', fontSize: 12 }}>寻找身边的 [黄]</Text>
              </View>
              <View style={{ borderWidth: .1, borderColor: '#444', borderRadius: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 4, paddingBottom: 4, }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#444' }}>+关注</Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
};


export default cart;