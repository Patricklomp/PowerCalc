import React, {Component, Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Header} from 'react-native-elements';

export default class MyHeader extends Component{
    constructor(props){
        super(props);
       
    }

    homeButtonHandler(){
        this.props.homeButtonHandler();
    }
    infoButtonHandler(){
        this.props.infoButtonHandler();
    }

    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.homeButtonHandler() }}
                    centerComponent={{ text: 'PowerCalc', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff',  onPress: () =>  this.infoButtonHandler()}}
                    />
            </Fragment>
        )
    }
}

