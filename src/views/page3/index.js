import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './style';


export default class Page3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 3
    }
  }


  //  页面
  render() {
    return (
      <View style={styles.container}>
        <Text>页面{this.state.page}</Text>
      </View>
    )
  }
}
