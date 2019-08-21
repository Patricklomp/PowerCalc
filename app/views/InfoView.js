import React, {Component, Fragment} from 'react';
import {Image} from 'react-native';
import {Button, SocialIcon,Text, Card} from 'react-native-elements';

export default class InfoView extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Fragment>
                <Card
                image={require('../imgs/power.jpg')}
                
                >
                    <Text h2>About</Text>
                    <Text>Made for powerlifters and fitness ethusiasts.</Text>
                    <Text h2>Privacy policy</Text>
                    <Text>Read about our privacy policy</Text>
                </Card>
                <SocialIcon
                title='Share our app on Twitter'
                button
                type='twitter'
                />
            </Fragment>
        )
    }
}