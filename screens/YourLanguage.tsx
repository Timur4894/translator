import { View, Text, SafeAreaView, StyleSheet} from "react-native"


function YourLanguage(){
    return(
        <View style={styles.container}>
            <Text>
                YourLanguage
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

  });
  
export default YourLanguage;
