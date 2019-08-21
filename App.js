/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,Fragment} from 'react';
import TabNavigator from './app/components/TabNavigator'
import MyHeader from './app/components/MyHeader'
import InfoView from './app/views/InfoView';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
       showCalc: true 
    }

    this.homeButtonHandler = this.homeButtonHandler.bind(this);
    this.infoButtonHandler = this.infoButtonHandler.bind(this);
}

homeButtonHandler(){
  this.setState({
      showCalc: true
  })

}
infoButtonHandler(){
  this.setState({
      showCalc: false
  })
  
}

  render(){
    let {showCalc} = this.state;

    if(showCalc){
    return (
      <Fragment>
        
        <MyHeader
        homeButtonHandler = {this.homeButtonHandler}
        infoButtonHandler={this.infoButtonHandler}
        />
        
         
        <TabNavigator></TabNavigator>
        
        
        
      </Fragment>
    );
    }
    else{
      return(
        <Fragment>
        <MyHeader
        homeButtonHandler = {this.homeButtonHandler}
        infoButtonHandler={this.infoButtonHandler}
        />
        <InfoView></InfoView>
        
        
        
      </Fragment>
      )
    }
  }
}


