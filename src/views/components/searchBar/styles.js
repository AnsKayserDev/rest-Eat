import { StyleSheet } from "react-native";
import { Colors } from "../../../infrastructure/assets/themes/Colors";
import { ZeplinGetWidth } from "../../../infrastructure/assets/Metrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red', height: '100%', width: '100%'
    },
    tiAdd: {
        backgroundColor: 'yellow',
        // flex: 1,
        marginHorizontal: '1%'
    },
    searchbar: {
        marginTop: 20,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'gray',
        width: '100%',
        paddingHorizontal: '1%'
    },
    vwAdd: {
        marginVertical: '10%',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'space-between',

    },

    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: Colors.darkish_pink,

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18,
        width: 18
    },
    searchContainer:
    {
        backgroundColor: 'white',
        width: ZeplinGetWidth(350),
        height: 40,
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 10,
        marginTop: 10

    },
    container: {
        // height: 60,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
});

export default styles;