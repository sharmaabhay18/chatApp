import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { NavigationBar, Title } from '@shoutem/ui';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './RouterComponent';

class App extends Component {

 componentWillMount() {
 
 }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return (
     <Provider store={store}>
     <View style={style.containerMain}>
     <NavigationBar
     centerComponent={<Title>Login Page</Title>}
     />
     <RouterComponent />
     </View>
     </Provider>
   );
   }
}

const style = {
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 15
  }
};

export default App;
