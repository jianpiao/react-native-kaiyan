import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: .3,
    borderBottomColor: '#ccc',
  },
  userinfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userinfoNameView: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
  },
  userinfoNameTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  userinfopublishView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userinfopublishTitle: {
    fontSize: 12,
    color: '#999'
  },
  userinfopublishText: {
    fontSize: 12,
    color: '#000'
  },
  followView: {
    borderWidth: .1,
    borderColor: '#444',
    borderRadius: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 4,
    paddingBottom: 4,
  },
  followTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#444'
  },
  contentView: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  joinView: {
    padding: 10,
    flex: 10,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  },
  joinType: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  joinDesc: {
    fontSize: 10,
    color: '#666'
  },
  joinAdd: {
    fontSize: 12,
    color: '#5198e0',
    fontWeight: 'bold'
  },
  likesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  likes: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  likesTitle:{
    fontSize: 12, 
    color: '#666', 
    marginLeft: 10,
  },
  likeDate:{
    fontSize: 12, 
    color: '#666'
  },
  commentView:{
    flexDirection: 'row', 
    alignSelf: 'center', 
    marginTop: 10, 
    marginLeft: 5
  },
  commentUsername:{
    fontSize: 12, 
    color: '#5198e0', 
    fontWeight: 'bold' 
  },
  commentUserContent:{
    fontSize: 12, 
    color: '#999'
  }
})

export default styles;