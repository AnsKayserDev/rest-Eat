import React from 'react';
import { Alert, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../../src/infrastructure/assets/Metrics';
import styles from './styles';
import { ItemSeprator } from '../../../src/views/components/shared/Seperator/Seperator';
import { useSelector } from 'react-redux';
import { Strings } from '../../../src/infrastructure/utils/strings';
import { Currency } from '../../../src/infrastructure/utils/constants';

const Item = ({ item: childItem }: any) => {
    return (
        <View style={styles.detailItem} >
            <Image source={{ uri: childItem.image }}
                style={{ width: ZeplinGetWidth(75), height: ZeplinGetHeight(100) }} />
            <View style={styles.restrauntDetails}>
                <Text style={styles.restrauntDetailName}>{childItem.title}    {childItem.price}</Text>
                <Text style={styles.restrauntDetailName}>Quantity:    {childItem.quantity}</Text>


            </View>
        </View >
    )
};

const CartScreen = ({ navigation }: any) => {
    const cartITems = useSelector((state: any) => state.storeReducer.cartITems);
    console.log(cartITems, 'cartITemscartITems')
    const cartITemsTotalPrice = cartITems?.map((el: any) => parseInt(el.price.split(' ')[0]) * el.quantity)?.reduce((partialSum: number, a: any) => partialSum + a, 0);
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: 10
        }}>
            <View >

                <FlatList
                    data={cartITems}
                    renderItem={({ item, index }) => <Item key={index} item={item} />}
                />
                <ItemSeprator />
                <Text style={{ marginRight: ZeplinGetWidth(40), marginVertical: ZeplinGetHeight(40), alignSelf: 'flex-end', fontWeight: 'bold', fontSize: 15 }}>{Strings.total_amount_deducted} {cartITemsTotalPrice} {Currency}</Text>
                <View style={styles.placeOrderButton}>
                    <Button
                        title="   Click Here To Place your Order Now "
                        color="white"
                        onPress={() => navigation.navigate('ConfirmationScreen')}

                    />
                </View>
            </View>
        </SafeAreaView>

    );
};

export default CartScreen;