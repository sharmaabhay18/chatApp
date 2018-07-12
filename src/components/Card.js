import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
  <View style={style.cardView}>
  {props.children}
  </View>
  );
};

const style = {
  cardView: {
    border: 2,
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default { Card };
