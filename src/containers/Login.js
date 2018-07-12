import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui';
import { Input } from '../components';

class Login extends Component {
  state = { email: '' };

  onChangeText(email) {
     this.setState(email);
  }
  render() {
    return (
    <View style={style.container}>
    <NavigationBar
    centerComponent={<Title>Login Page</Title>}
    />
    <Input
     label='Email'
     placeholder='Enter Email'
     onChangeText={this.onChangeText}
     value={this.state.email}
    />
    </View>
    );
  }
}

const style = {
container: {
  flex: 1
}
};


export { Login };
