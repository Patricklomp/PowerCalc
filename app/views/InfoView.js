import React, {Component, Fragment} from 'react';
import {Image, Linking} from 'react-native';
import {Button, SocialIcon,Text, Card} from 'react-native-elements';

export default class InfoView extends Component{
    constructor(props){
        super(props);
        this.handleTwitter = this.handleTwitter.bind(this);
        this.handlePolicy = this.handlePolicy.bind(this);
    }

    handleTwitter(){
        Linking.openURL("https://twitter.com/intent/tweet?text=Just%20started%20using%20PowerCalc")
    }
    handlePolicy(){
        Linking.openURL("http://patricklomp.ee/policy/powercalc.html")
    }
    render(){
        return(
            <Fragment>
                <Card
                image={require('../imgs/power.jpg')}
                
                >
                    <Text h2>About</Text>
                    <Text>Made for powerlifters and fitness ethusiasts to easily calculate IPF or Wilks points.</Text>
                    <Text h2>Privacy policy</Text>
                    <Text
                    onPress={this.handlePolicy}
                    >Click here to read about our privacy policy</Text>
                </Card>
                <SocialIcon
                title='Share our app on Twitter'
                button
               onPress={this.handleTwitter}
                type='twitter'
                />
            </Fragment>
        )
    }
}