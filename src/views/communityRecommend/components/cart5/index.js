import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import styles from './style';

// 创作主题
const cart = () => {
  // Declare a new state variable, which we'll call "count"
  const [list, setList] = useState([
    { title: '#分享一个好天气', content: '与陌生的你分享一个小惊喜' },
    { title: '#人间草木', content: '一草一木总是情' },
    { title: '#进入书摘', content: '今日书摘,及一点思考' },
  ]);

  return (
    <View style={styles.card}>
      <View style={styles.headerView}>
        <Text style={styles.headerViewTitle}>推荐创作主题</Text>
        <Text style={styles.headerViewMore}>查看全部 ></Text>
      </View>
      <View>
        {
          list.map((item, index) => (
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
              }}
              key={index}>
              <Image
                source={require('../../../../static/image/1.jpg')}
                style={{ width: 50, height: 50, borderRadius: 5, }}
                resizeMode="cover"
              />
              <View style={{ flex: 1, marginLeft: 10, marginLeft: 10, }}>
                <Text>{item.title}</Text>
                <Text style={{ color: '#999', fontSize: 12 }}>{item.content}</Text>
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