import { View, TextInput, StyleSheet} from "react-native"
import { Ionicons } from "@expo/vector-icons";


function Search(){
    return(
        <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#bebebe" style={styles.icon} />
                <TextInput
                placeholder="Search"
                placeholderTextColor="#bebebe"
                style={styles.input}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#989898d1',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },

  });
  
export default Search;
