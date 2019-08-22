import React, { Component } from 'react'
import {View, StyleSheet, Switch} from 'react-native'
import {Card, Button,Text, Input } from 'react-native-elements';
export default class WilksView extends Component {
    constructor(props){
        super(props);
        this.state= {
            total: 0,
            weight: 0,
            totalPoints: 0,
            isMale: true,
            isRaw: true,
            isBench: false
        }
    }

    getTotal(weight,total,isMale){

        let x = weight;
        let vars = [0,0,0,0,0,0];

        if(isMale){
            vars = [-216.0475144,16.2606339,-0.002388645,-0.00113732,7.01863E-06,-1.291E-08];
        }else{
            vars = [594.31747775582,-27.23842536447,0.82112226871,-0.00930733913,4.731582E-05,-9.054E-08];
        }


        let wilks =total*( 500/(vars[0] +vars[1]*x + vars[2]*Math.pow(x,2)+vars[3]*Math.pow(x,3)+vars[4]*Math.pow(x,4)+vars[5]*Math.pow(x, 5)));

        this.setState({
            totalPoints: wilks
        })

        return wilks;
    }
    render() {
        let {total, weight, totalPoints, isMale, isRaw, isBench} = this.state;

        return (
           
            <Card style={[styles.calculator]}> 
            <Text h4 styles={styles.header}>Wilks Calculator</Text>


            <View styles={[styles.personInputs]}>
                <Text>Total</Text>
                    <Input
                        placeholder="Total"
                        style={styles.inputText}
                        onChangeText={(total) => this.setState({total})}
                        value={total}
                    />
                <Text>Person's weight</Text>
                    <Input
                        placeholder="Weight"
                        style={styles.inputText}
                        onChangeText={(weight) => this.setState({weight})}
                        value={weight}
                        />
                <Text>M/W</Text>
                <Switch onValueChange={this.handleGender}></Switch>
                <Text onValueChange={this.handleType}>Raw/Equiped</Text>
                <Switch></Switch>
            </View>


            <Text>Total: </Text>
            <Text>{totalPoints}</Text>
            <Button
  onPress={() => this.getTotal(weight,total,true)}
  title="Calculate"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
            
          </Card>
          
        )
    }
}

const styles = StyleSheet.create({
    inputText: {
        height: 40, 
        borderColor: 'gray',
         borderWidth: 1
    },
    header: {
        fontSize: 20,
        color: "white"
    },
    calculator: {
        margin: 0,
        padding: 10,
        fontSize: 20,
         
    },
    personInputs: {
        width: 100
    }
})
