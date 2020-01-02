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
        <Text style={styles.headerViewTitle}>专题策划</Text>
        <Text style={styles.headerViewMore}>查看全部 ></Text>
      </View>
      <View style={{ paddingLeft: 7.5, paddingRight: 7.5, paddingBottom: 10, marginBottom: 10, borderBottomColor: '#eee', borderBottomWidth: .4, }}>
        <View style={{ flexDirection: 'row', }}>
          <ImageBackground
            source={require('../../../static/image/1.jpg')}
            style={{ flex: 1, width: '100%', height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 2.5 }}
            imageStyle={{ borderRadius: 5 }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold'
            }}>死前必吃美味清单</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../static/image/1.jpg')}
            style={{ flex: 1, width: '100%', height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 2.5 }}
            imageStyle={{ borderRadius: 5 }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold'
            }}>鬼故事实则</Text>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <ImageBackground
            source={require('../../../static/image/1.jpg')}
            style={{ flex: 1, width: '100%', height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 2.5 }}
            imageStyle={{ borderRadius: 5 }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold'
            }}>死前必吃美味清单</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../static/image/1.jpg')}
            style={{ flex: 1, width: '100%', height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 2.5 }}
            imageStyle={{ borderRadius: 5 }}>
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold'
            }}>鬼故事实则</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
};


export default cart;