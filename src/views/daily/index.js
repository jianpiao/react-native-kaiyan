import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  RefreshControl
} from 'react-native';
import styles from './style';
import Cart from './components/cart1';


export default class DailyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      refreshing: false,
      timer: null
    }
  }


  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.state.timer = setTimeout(() => {
      clearTimeout(this.state.timer)
      this.setState({
        refreshing: false,
        timer: this.state.timer,
      });
    }, 1000);
  }


  //  页面
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.body}>
            <Cart />
          </View>
        </ScrollView>
      </View >
    )
  }
}
