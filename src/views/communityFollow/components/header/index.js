import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// 头部信息
const cart = () => {
  // Declare a new state variable, which we'll call "count"
  const [list, setList] = useState(0);

  return (
    <View style={styles.box}>
      <View style={styles.content}>
        <FontAwesome name="user-circle" size={70} color="#eee" />
        <Text style={styles.notice}>点击登录后可关注主题和作者</Text>
      </View>
    </View>
  )
};


export default cart;