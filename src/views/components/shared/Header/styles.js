import {
  ZeplinGetHeight,
  ZeplinGetWidth,
} from '../../../../infrastructure/assets/Metrics';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../../infrastructure/assets/themes/Colors';

const styles = StyleSheet.create({
  headercontainer: {
    alignItems: 'center',
    paddingHorizontal: ZeplinGetWidth(10),
    width: ZeplinGetWidth(350),
    width: '100%',
    height: ZeplinGetHeight(30),
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: Colors.darkish_pink
  },
  messageText: {
    fontSize: 20,
    color: Colors.white_text,
  }
});
export default styles;
