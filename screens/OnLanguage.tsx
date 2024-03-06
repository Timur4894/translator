import { View, Text, SafeAreaView, StyleSheet} from "react-native"
import Logo from "../components/Logo"
import InputText from "../components/InputText"
import Languages from "../components/Languages"
import BottomTabs from "../components/BottomTabs"


function OnLanguage(){
    return(
        <View style={styles.container}>
            <Text>
                OnLanguage
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

  });
  
export default OnLanguage;
