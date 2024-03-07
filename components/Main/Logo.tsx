import { StyleSheet, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons";



function Logo(){
    return(
        <View style={styles.logo}>
            <View style={styles.container}>
                <Ionicons name="star" size={30} color="#fff" style={styles.star}/>
                <View style={styles.star}>
                    <Text style={styles.text}>Translator</Text>
                </View>
            </View>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
    },
    text: {
        color: '#b6b6b6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        marginTop: 50,
        alignContent: 'center',
        alignItems: 'center'
    },
    star: {
        marginRight: '22%',
        marginLeft: '-3%'
    }
});
