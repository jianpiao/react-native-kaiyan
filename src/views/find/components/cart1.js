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
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: .4,
        borderBottomColor: '#eee',
      }}>
      <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 5, }}>
        {
          [1, 2, 3, 4, 5].map((item, index) => (
            <ImageBackground
              key={index}
              source={require('../../../static/image/1.jpg')}
              style={{ width: screenWidth - 20, height: 200, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5 }}
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
          ))
        }
      </View>
    </ScrollView>
  )
};


export default cart;