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
    paddingLeft: 10,
    paddingRight: 10
  },
  card: {
    flex: 1,
  },
  cardLine: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: .3,
    borderBottomColor: '#ccc'
  },
  // 头部
  headerView: {
    flex: 1,
    height: 40,
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