import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, Button, Image } from 'react-native';
import { Splash_Screen_image } from '../../src/infrastructure/assets/themes/images';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../src/infrastructure/assets/Metrics';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ navigation }): any => {

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeLanding' }]
            })
        }, 2000);

    }, []);


    return (
        <View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image resizeMethod="resize" source={{ uri: Splash_Screen_image }}
                    style={{ width: ZeplinGetWidth(375), height: ZeplinGetHeight(1500) }} />
                <ActivityIndicator size="large" />
            </View>
        </View>

    );
};
export default SplashScreen;