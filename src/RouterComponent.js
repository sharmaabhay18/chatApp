import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from './containers/Login';
import ChatScreen from './containers/ChatScreen';
import * as actions from './actions';

class RouterComponent extends Component {

  logoutUser() {
      this.props.logoutUser();
      Actions.auth();
 }

 render() {
  return (
   <Router navigationBarStyle={style.navbarStyle}>
    <Scene
    key='root'
    titleWrapperStyle={{ alignItems: 'center' }}
    titleStyle={{ textAlign: 'center',
     flex: 1,
     color: 'white',
     letterSpacing: 1.5 }}
    hideNavBar
    >
    <Scene key='main'>
     <Scene
      key='chatScreen'
      component={ChatScreen}
      title='Chat Screen'
      rightTitle='Logout'
      onRight={this.logoutUser.bind(this)}
      rightButtonTextStyle={{ color: 'white', fontSize: 15 }}
     />
     </Scene>
     <Scene key='auth' >
      <Scene
       key='login'
       component={Login}
       title='LOGIN'
       initial
      />
      </Scene>
    </Scene>
   </Router>
 );
}
}

const style = {
 navbarStyle: {
  backgroundColor: '#00aef0'
},
titleNavBar: {

}
};
export default connect(null, actions)(RouterComponent);
