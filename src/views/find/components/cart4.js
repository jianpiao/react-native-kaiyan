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

const cart = ({ topicWeek }) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>本周榜单</Text>
        <Text style={styles.headerViewMore}>查看全部 ></Text>
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, marginBottom: 10, borderBottomColor: '#eee', borderBottomWidth: .4, }}>
        {
          topicWeek.map((item, index) => (
            <View style={styles.card} key={index}>
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
                  <View style={{ paddingLeft: 2, backgroundColor: '#000', margin: 10, borderRadius: 2, }}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>{item.time}</Text>
                  </View>
                </ImageBackground>
                <View style={{ flex: 1, marginLeft: 10, }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: '#999', fontSize: 12 }}>{item.type}</Text>
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