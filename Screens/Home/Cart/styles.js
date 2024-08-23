

import { StyleSheet } from 'react-native';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../../src/infrastructure/assets/Metrics';
import { Colors } from '../../../src/infrastructure/assets/themes/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
    placeOrderButton: {
        alignSelf: 'center',
        width: ZeplinGetWidth(350),
        backgroundColor: Colors.darkish_pink,
        padding: 10,
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
    restrauntDetails: {
        // flexDirection: 'row',
        marginLeft: ZeplinGetWidth(20),
        padding: 10,

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
})
export default styles;
