import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/common/Header';
import {Colors} from '../../constants/Colors';
import AppConfig from '../../services/config';

const HomeScreen = () => {
  console.log('App Config:', AppConfig);

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to CPAN 213!</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background},
  content: {flex: 1, padding: 20},
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default HomeScreen;
