import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Button = ({ title, onPress, icon, color = '#fff' }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <MaterialIcons name={icon} size={24} color={color} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#1e90ff',
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
