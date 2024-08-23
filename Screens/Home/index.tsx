/**
 * Sample React Native App
 * https://github.com/facebook/react-native 
 * Ans Kayser
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import _ from 'lodash';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { DiscountOffers, RestrauntLists } from '../../src/infrastructure/utils/mockData';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../src/infrastructure/assets/Metrics';
import { Strings } from '../../src/infrastructure/utils/strings';
import styles from './styles';
import Searchbar from '../../src/views/components/searchBar/searchBar';
import { ItemSeprator } from '../../src/views/components/shared/Seperator/Seperator';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscountList, fetchRestrantsList } from '../../src/store/actions/action';
import { useIsMounted } from '../../src/infrastructure/hooks/useIsmounted';


export const HomeLanding = ({ navigation }) => {

  type ItemProps = { item: { title: string, image: string, minCharge: string, rating: string, titlMC: string, url_menucat: string, type: string } }; //these can be moved to new file for types and can be imported from there also

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  const dispatch = useDispatch();
  const [restrauntLists, setRestrauntList]: any = useState();
  const [isProcessing, setProcessing] = useState(false)
  const [value, setValue] = useState('');
  const restrauntListsData = useSelector((state: any) => state.storeReducer.restrauntListsData) || RestrauntLists;
  const discountOffersData = useSelector((state: any) => state.storeReducer.discountOffersData);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (!!isMounted()) {
      dispatch(fetchRestrantsList())
      dispatch(fetchDiscountList())
    }
  }, [isMounted])

  function updateSearch(value: string) {
    setValue(value);
    handleSearch(value)
  }

  useEffect(() => {
    setRestrauntList(restrauntListsData)
  }, [restrauntListsData]);

  const handleSearch = _.debounce((searchTerm) => {
    setProcessing(false);
    const filteredList = getRestrauntFilteredList(searchTerm);
    setRestrauntList(filteredList)
  }, 1500);

  const getRestrauntFilteredList = (value: string) => {
    if (!value)
      return RestrauntLists;
    return restrauntLists?.filter((el: any) => (el.title.toLowerCase()).includes(value.toLowerCase()))
  }

  const Item = ({ item }: ItemProps) => {
    return (
      //Below all jsx can be convert into chunks of components and we can have a clean home landing with just multiple comonents rendering only
      <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
        <View style={styles.item}>
          <Image source={{ uri: item.image }}
            style={{ width: ZeplinGetWidth(75), height: ZeplinGetHeight(100) }} />
          <View style={styles.restrauntDetails}>
            <Text style={styles.restrauntName}>{item.title}</Text>
            <Text style={styles.restrauntName}>MinCharge: {item.minCharge}</Text>
            <Text style={styles.restrauntName}>Rating: {item.rating}</Text>
            <Text style={styles.restrauntName}>Trending : {item.type.toString()}</Text>
            <Text style={styles.restrauntNameDetails}>{Strings.click_to_see}</Text>
          </View>
        </View>
      </TouchableOpacity>)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}

          scrollEventThrottle={1}>
          {discountOffersData?.map((item: any, imageIndex: number) => {
            return (
              <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
                <ImageBackground source={{ uri: item.image }} style={styles.card} >
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {' Order from ' + item.name + 'and avail discounts'}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {discountOffersData.map((image: any, imageIndex: number) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
      <ItemSeprator />
      <Searchbar
        value={value}
        updateSearch={updateSearch}
      />

      <Text style={styles.showingAllRestrunt}>{!!value ? value : Strings.see_restraunt}</Text>
      {!!isProcessing ? <View style={styles.activityIndContainer}>
        <ActivityIndicator />
      </View>
        :
        <FlatList
          data={restrauntLists}
          renderItem={({ item, index }) => <Item key={index} item={item} />}
          keyExtractor={item => item.id}
        />
      }
    </SafeAreaView>

  );
}
