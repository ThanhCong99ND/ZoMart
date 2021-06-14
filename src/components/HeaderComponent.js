import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({title}) => (
  <View style={styles.headerContainer}>
    {/*  */}
    <View style={styles.cartContainer}>
      <View style={styles.cartIcon} />
    </View>
    {/*  */}
    <Text style={styles.headerText}>{title}</Text>
    {/*  */}
    {/* <View style={styles.cartContainer}>
      <FontAwesome name="shopping-cart" size={HEADER_ICON_SIZE} color="#fff" />
    </View> */}
  </View>
);

export default Header;

const HEADER_ICON_SIZE = 24;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: '#FFB039',
    justifyContent: 'space-between',
    paddingBottom: 12,
    marginBottom: 10,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    
  },
});
