import { View, Text, StyleSheet, ScrollView} from "react-native"
import Search from "../components/UI/Search"


function OnLanguage(){
    return(
        <View style={styles.container}>
            <Search/>

            <ScrollView style={{marginTop: 30, marginHorizontal: 10}}>
                <Text style={{color: '#989898d1', marginBottom: 10, marginLeft: 10}}>
                    All languages
                </Text>
                <View style={styles.alllanguages}>
                    <Text style={styles.nameoflanguage}>
                        English
                    </Text>
                    <Text style={styles.nameoflanguage}>
                        Polish
                    </Text>
                    <Text style={styles.nameoflanguage}>
                        Russian
                    </Text>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    alllanguages: {
        borderRadius: 10,
        backgroundColor: '#1d1d1d',
        padding: 10,

    },
    nameoflanguage: {
        color: '#fff',
        padding: 7
    }
    
  });
  
export default OnLanguage;
