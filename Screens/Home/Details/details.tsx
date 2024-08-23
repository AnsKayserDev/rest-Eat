import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import styles from '../styles'
import { ZeplinGetHeight, ZeplinGetWidth } from '../../../src/infrastructure/assets/Metrics';
import { RestrauntLists } from '../../../src/infrastructure/utils/mockData';
import { ItemSeprator } from '../../../src/views/components/shared/Seperator/Seperator';
import { Strings } from '../../../src/infrastructure/utils/strings';
import Searchbar from '../../../src/views/components/searchBar/searchBar';
import _ from 'lodash';
import { AddToCart, ArrowLeft, ArrowRight } from '../../../src/views/svgIcon/icons';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCartItems } from '../../../src/store/actions/action';

const Details = ({ navigation, route }): any => {
    const { width: windowWidth } = useWindowDimensions();
    const item = route.params.item;
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const [menuList, setMenuList] = useState(item.menuItems || []);
    const cartITems = useSelector((state: any) => state.storeReducer.cartITems);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setValue("");
        });
        return unsubscribe;
    }, [navigation]);

    const updateSearch = (value: string) => {
        //do your search logic or anything
        setValue(value);
        // setProcessing(true);
        handleSearch(value)
    }

    const handleSearch = _.debounce((searchTerm) => {
        setMenuList(getRestrauntFilteredList(searchTerm))
    }, 1500);

    const getRestrauntFilteredList = (value: string) => {
        if (!value)
            return item.menuItems;
        return menuList?.filter((el: any) => (el.title.toLowerCase()).includes(value.toLowerCase()))
    }

    const updateCart = (item: any, status: boolean) => {
        dispatch(UpdateCartItems(item, status))
    }

    const Item = ({ item: childItem }: any) => {
        const selectedCartItem = cartITems?.filter((el: any) => el.title == childItem.title);
        const currentItemQuanity = selectedCartItem[0]?.quantity;
        return (
            <View style={styles.detailItem} >
                <Image source={{ uri: childItem.image }}
                    style={{ width: ZeplinGetWidth(75), height: ZeplinGetHeight(100) }} />
                <View style={styles.restrauntDetails}>
                    <Text style={styles.restrauntDetailName}>Name: {childItem.title}</Text>
                    <Text style={styles.restrauntDetailName}>Price: {childItem.price}</Text>
                    <Text style={styles.restrauntDetailName}>Item Info: {childItem.des}</Text>
                    <View style={styles.arrowContainer}>
                        {currentItemQuanity >= 1 && <TouchableOpacity onPress={() => updateCart(childItem, false)}>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRh3m5WYgrzjF-x-vbrKlbWnixNmYSx-TQw&s" }}
                                style={{ width: ZeplinGetWidth(70), height: ZeplinGetHeight(70), }} />
                        </TouchableOpacity>
                        }
                        {<TouchableOpacity onPress={() => updateCart(childItem, true)}>
                            <Image source={{ uri: "data:image/jpeg;base64,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" }}
                                style={{ width: ZeplinGetWidth(150), height: ZeplinGetHeight(100) }} />
                        </TouchableOpacity>
                        }
                    </View>
                    <Text style={styles.restrauntDetailName}>{!!currentItemQuanity ? `Quantity:  ${currentItemQuanity || '--'}` : ''}</Text>
                </View>
            </View>
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ paddingLeft: 10 }}>{`${cartITems.length ? 'Total Items in Cart: ' + cartITems.length : Strings.no_items_found_in_cart}`} {!!cartITems.length && <Text onPress={(() => { navigation.navigate('CartScreen') })} style={styles.restrauntNameDetailsDetails}>{"    " + Strings.see_item_to_cart}</Text>}</Text>
            <Searchbar
                value={'value'}
                updateSearch={updateSearch}
            />
            <Text style={styles.showingAllRestrunt}>{Strings.see_dishes}</Text>
            <FlatList
                data={menuList}
                renderItem={({ item, index }) => <Item item={item} />}
                keyExtractor={item => item.item_id}
            />
            <ItemSeprator />

        </SafeAreaView>

    );
};
export default Details;