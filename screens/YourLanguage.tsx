import { View, Text, SafeAreaView, StyleSheet, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import Search from "../components/UI/Search";


function YourLanguage(){
    return(
        <View style={styles.container}>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#'
    },

  });
  
export default YourLanguage;
