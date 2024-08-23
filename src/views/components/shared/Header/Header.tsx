import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Strings } from '../../../../infrastructure/utils/strings';
const Header = (_props: any) => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.messageText}>{Strings.welcomeText}</Text>
    </View>
  );
};

export default Header;
