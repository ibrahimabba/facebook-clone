import { View, Text, StyleSheet } from 'react-native'
import { STATUSBAR_HEIGHT } from '../constants';

export default function HeaderComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>facebook</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: STATUSBAR_HEIGHT,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#242526',
    },
    text: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 12
    }
})