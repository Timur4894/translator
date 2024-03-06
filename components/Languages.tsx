import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

function Languages() {
  const navigation: any = useNavigation() //??

  const haldleOnWichLanguage = () => {
    navigation.navigate('OnLanguage')
  }

  const haldleYourLanguage = () => {
    navigation.navigate('YourLanguage')
  }

  return (
    <View style={styles.container}>
      <View style={styles.languages}>
        <Pressable onPress={haldleYourLanguage}>
          <View style={styles.box}>
              <Text style={styles.text}>
              English
              </Text>
          </View>
        </Pressable>

        <Ionicons name='swap-horizontal' size={18} color='#fff' style={{marginHorizontal: -30}}/>

        <Pressable onPress={haldleOnWichLanguage}>
          <View style={styles.box}>
              <Text style={styles.text}>
                  Polish
              </Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#323232'
  },
  languages: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  box: {
    alignItems: 'center',
    borderRadius: 10,
    minWidth: 120,
    padding: 20,
    backgroundColor: '#1a1a1a',
  }
});

export default Languages;
