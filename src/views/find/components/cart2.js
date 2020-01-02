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

const cart = ({hotClassify}) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>热门分类</Text>
        <Text style={styles.headerViewMore}>查看全部分类 ></Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, }}>
        <View style={{
          paddingLeft: 10,
          paddingRight: 5,
          paddingBottom: 10,
          borderBottomColor: '#eee',
          borderBottomWidth: .4,
        }}>
          {
            hotClassify.map((item, index) => (
              <View style={{ flexDirection: 'row', }} key={index}>
                {
                  item.data.map((childItem, childIndex) => (
                    <ImageBackground
                      key={childIndex}
                      source={require('../../../static/image/1.jpg')}
                      style={{ width: 100, height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, }}
                      imageStyle={{ borderRadius: 5 }}>
                      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, }}>{childItem}</Text>
                    </ImageBackground>
                  ))
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
};


export default cart;