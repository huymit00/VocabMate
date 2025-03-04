import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.firstText}>Welcome Back</Text>
        <Text style={styles.secondText}>Login to your account</Text>
      </View>
      <TextInput style={styles.input} placeholder="Enter Username" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  firstText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  secondText: {
    fontSize: 15,
  },
  input: {
    fontSize: 20,
    height: 30,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  view: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: 'rgba(83,181,26,0.4)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#5EFF00',
    borderRadius: 40,
  },
  buttonText: {
    opacity: 1.0,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
});
