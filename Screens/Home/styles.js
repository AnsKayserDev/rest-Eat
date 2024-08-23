
import { StyleSheet } from 'react-native';
import { Colors } from '../../src/infrastructure/assets/themes/Colors';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../src/infrastructure/assets/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  scrollContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  imageItem: {
    backgroundColor: 'red'
  },
  flatListcontainer: {
    flex: 1,
    marginTop: 10,
  },
  placeOrderConfirm: {
    alignSelf: 'center',
    width: ZeplinGetWidth(350),
    backgroundColor: Colors.skyBlue,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    shadowColor: Colors.skyBlue,
    shadowOpacity: 0.8,
    shadowRadius: 7,
    borderRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3
    },
    textAlign: 'center'
  },
  item: {
    width: ZeplinGetWidth(350),
    backgroundColor: Colors.darkish_pink,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    borderRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3
    }
  },
  detailItem: {
    width: ZeplinGetWidth(350),
    backgroundColor: Colors.white_text,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    shadowColor: Colors.darkish_pink,
    shadowOpacity: 0.8,
    shadowRadius: 7,
    borderRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3
    }
  },
  title: {
    fontSize: 12,
    marginTop: 10,
  },
  restrauntName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.white_text
  },

  restrauntDetailName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.darkish_pink
  },

  restrauntNameDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.darkish_pink
  },
  restrauntNameDetailsDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 15,
    color: Colors.skyBlue,
    textAlign: 'right'
  },
  arrowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '50%',
    marginTop: ZeplinGetHeight(10),
    // marginLeft: 10,
    justifyContent: 'center',

  },
  restrauntDetails: {
    // flexDirection: 'row',
    marginLeft: ZeplinGetWidth(20),
    padding: 10,

  },
  restrauntNameDetails: {
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 30,
    color: Colors.white_text,
    textDecorationStyle: 'dotted'
  },
  showingAllRestrunt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#371D33',
    textDecorationStyle: 'dashed',
    marginLeft: 20,
  },
  searchBarcontainer: {
    backgroundColor: 'red',
    flexDirection: 'column-reverse',
    // flex: 1,
    flex: 1,

  },
  activityIndContainer: {
    alignItems: 'center',
    paddingHorizontal: ZeplinGetWidth(10),
    width: ZeplinGetWidth(350),
    width: '100%',
    height: ZeplinGetHeight(30),
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: Colors.darkish_pink
  }

});
export default styles;
