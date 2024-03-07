import { View, StyleSheet, Text} from "react-native"
import { Ionicons } from "@expo/vector-icons";


function BottomTabs(){
    return(
        <View style={styles.container}>
            <View style={styles.rowstyle}>
                <View style={styles.cirle1}>
                    <Ionicons name='mic' size={30} color="#fff"/>
                </View>
                <View style={styles.cirle2}>
                    <Ionicons name='camera' size={30} color="#fff"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        marginTop: -20,
    },
    rowstyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 30
    },
    cirle1: {
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '30%'
    },
    cirle2: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: '#4253a6',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5.5%',
        marginRight: 50
    }
});

export default BottomTabs