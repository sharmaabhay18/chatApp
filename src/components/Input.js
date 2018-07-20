import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from '@shoutem/ui';

const Input = ({ label, placeholder, onChangeText, value, secureTextEntry }) => {
  const { inputStyle, labelStyle, textInput } = style;
  return (
   <View style={inputStyle}>
   <Text style={labelStyle}>{label}</Text>
   <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    secureTextEntry={secureTextEntry}
    autoCorrect={false}
    style={textInput}
   />
   </View>
  );
};

const style = {
  inputStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 30
  },
  textInput: {
    flex: 2
  }
};

export { Input };
