import React, { Component, Fragment } from 'react'
import {View, TextInput, StyleSheet, Switch } from 'react-native';
import {Card, Button, Icon, Input, Text } from 'react-native-elements';

export default class IpfView extends Component {
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
    getTotal(weight,total,isMale,isRaw,isBench){
        let IPFpoints = 0;
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        let c4 = 0;

        if(isMale){
            if(isRaw&&!isBench){
                c1 = 310.6700;
                c2 = 857.7850;
                c3 = 53.2160;
                c4 = 147.0835;
            }
            if(isRaw&&isBench){
                c1 = 86.4745;
                c2 = 259.1550;
                c3 = 17.5785;
                c4 = 53.1220;
            }

            if(!isRaw&&!isBench){
                c1 = 387.2650;
                c2 = 1121.2800;
                c3 = 80.6324;
                c4 = 222.4896;
            }

            if(!isRaw&&isBench){
                c1 = 133.9400;
                c2 = 441.4650;
                c3 = 35.3938;
                c4 = 113.0057;
            }


        }

        if(!isMale){
            if(isRaw&&!isBench){

            }
            if(isRaw&&isBench){

            }

            if(!isRaw&&!isBench){

            }

            if(!isRaw&&isBench){

            }


        }



        if(total>0){
            IPFpoints = 500+100*(total-(c1*Math.log(weight)-c2))/(c3*Math.log(weight)-c4);
        }
        this.setState({
            totalPoints: IPFpoints
        }
        )
        return weight;
    }

    handleGender = () =>{
        this.setState({
            isMale: !this.state.isMale
        })
    }

    handleType = () =>{
        this.setState({
            isRaw: !this.state.isRaw
        })
    }

    handleBench = () =>{
        this.setState({
            isBench: !this.state.isBench
        })
    }

    render() {
       let {total, weight, totalPoints, isMale, isRaw, isBench} = this.state;



        return (
           
            <Card style={[styles.calculator]}> 
            <Text h4 styles={styles.header}>IPF Calculator</Text>


            <View styles={[styles.personInputs]}>

                        <View styles={[styles.child]}>
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
                    </View>

                    <View styles={[styles.child]}>
                    <Text>M/W</Text>
                    <Switch value = {!isMale} onValueChange={this.handleGender}></Switch>
                    <Text >Raw/Equiped</Text>
                    <Switch value = {!isRaw} onValueChange={this.handleType}></Switch>
                    </View>


            </View>


            <Text>Total: </Text>
            <Text>{totalPoints}</Text>
            <Button
              icon={
                <Icon
                type= 'material-community'
                 color= '#86939e'
                    name= 'share'
                />
              }
  onPress={() => this.getTotal(weight,total,isMale,isRaw,false)}
  title="Calculate"
  color="#841584"
  accessibilityLabel="Calculate points"
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
        fontFamily: "RobotoSlab-Regular",
        backgroundColor: 'white',
        borderColor: '#C83C2A',
        borderWidth: 1,
        margin: 0,
        padding: 10,
        fontSize: 20,
        
        
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
         
    },
    personInputs: {
        display: "flex",
        justifyContent: "space-around",
        width: 100
    },
    child: {
        width: 50,
        backgroundColor: "black"
    }

})