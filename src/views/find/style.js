import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 1
  },
  body: {
    flex: 1,
  },
  card: {
    flex: 1
  },
  // 头部
  headerView: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerViewTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold'
  },
  headerViewMore: {
    fontWeight: 'bold',
    color: '#5198e0',
  }
})

export default styles;