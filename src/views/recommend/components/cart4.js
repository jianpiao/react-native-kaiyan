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
        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
          <Text style={styles.headerViewTitle}>五分钟新知 </Text>
          <Text style={{ color: '#999', fontSize: 12, fontWeight: 'bold', marginLeft: 10, }}>></Text>
        </View>
        <View style={{ borderWidth: .1, borderColor: '#444', borderRadius: 2, paddingLeft: 7, paddingRight: 7, paddingTop: 4, paddingBottom: 4, }}>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#444' }}>+关注</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../../static/image/1.jpg')}
          style={{ width: '100%', height: 200, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          imageStyle={{ borderRadius: 5 }}>
          <Text style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
          }}>秋天真香</Text>
          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20
          }}>死前必吃清单</Text>
          <Text style={{
            color: '#fff',
            fontSize: 13
          }}>点击查看详情</Text>
        </ImageBackground>
      </View>
      <View style={{ flex: 1 }}>
        {
          [1, 2].map((item, index) => (
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, }}>
                <ImageBackground source={require('../../../static/image/1.jpg')}
                  style={{
                    width: '100%',
                    height: 100,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                  }}
                  imageStyle={{ borderRadius: 5 }}>
                  <View style={{ padding: 5, backgroundColor: '#000', margin: 10, borderRadius: 2, }}>
                    <Text style={{ color: '#fff' }}>03:50</Text>
                  </View>
                </ImageBackground>
                <View style={{ flex: 1, marginLeft: 10, }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>死前必吃的43钟巨型美食,想和你迟到天荒地老</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: '#999' }}>#开胃 / 开眼精选</Text>
                    <Text>↓</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
};


export default cart;