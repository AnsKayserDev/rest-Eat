import { StyleSheet } from 'react-native';
import { Colors } from '../../src/infrastructure/assets/themes/Colors';
import { ZeplinGetHeight, ZeplinGetWidth } from '../../src/infrastructure/assets/Metrics';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        marginHorizontal: 10,
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 5,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default styles;
