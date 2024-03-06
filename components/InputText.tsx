import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

function InputText() {
  const onChange = (): void => {
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Write text to translate"
        placeholderTextColor='#959595'
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 2,
    backgroundColor: "#1a1a1a",
    borderColor: "#1a1a1a",
  },
  input: {
    marginLeft: 20,
    marginTop: 30,
    color: "#fff",
    fontSize: 22
  },

});

export default InputText;
