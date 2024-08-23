import React from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import styles from '../styles';
import { Strings } from '../../../src/infrastructure/utils/strings';
import { CommonActions } from '@react-navigation/native';
import { RestrauntLists } from '../../../src/infrastructure/utils/mockData';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../../src/store/actions/action';


const ConfirmationScreen = ({ navigation }: any) => {
    const dispatch: any = useDispatch();


    const handleHomeNavigation = () => {
        // navigation.navigate('HomeLanding')
        dispatch(resetCart());

        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'HomeLanding' }],
            })
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.restrauntDetails}>
                    <Text style={styles.restrauntName}>{Strings.order_completion}</Text>
                    <Text style={styles.restrauntName}>Your Order No is : {Math.floor(Math.random() * 1024)}</Text>
                    <Text style={styles.restrauntNameDetails}>{Strings.thanks_for_using}</Text>
                    <Text style={styles.restrauntNameDetails} />

                </View>

            </View>

            <View style={styles.placeOrderConfirm}>
                <Button
                    onPress={() => handleHomeNavigation()}

                    title={Strings.go_to_main_screen}
                    color="000"
                />
            </View>

        </View>
    );
};

export default ConfirmationScreen;