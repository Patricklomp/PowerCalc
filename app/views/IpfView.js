import React, { Component, Fragment } from 'react'
import {View, TextInput, StyleSheet, Switch } from 'react-native';
import {Card, Button, Icon, Input, Text, CheckBox } from 'react-native-elements';

export default class IpfView extends Component {
    constructor(props){
        super(props);
        this.state= {
            total: "",
            weight: "",
            totalPoints: "",
            isMale: true,
            isRaw: true,
            isBench: false
        }
    }
    getTotal(weight,total,isMale,isRaw,isBench){
        let IPFpoints = 0;
        let vars = [0,0,0,0];
       

        
        if(isMale){

            switch(true){
                case(isRaw&&!isBench):
                vars = [310.6700,857.7850,53.2160,147.0835];
                break;
                case(isRaw&&isBench):
                vars = [86.4745,259.1550,17.5785,53.1220];
                break;
                case(!isRaw&&!isBench):
                vars = [387.2650,1121.2800,80.632,222.4896];
                break;
                case(!isRaw&&isBench):
                vars = [133.9400,441.4650,35.3938,113.0057];
                break;
            }

        }else{

            switch(true){
                case(isRaw&&!isBench):
                 vars = [125.1435, 228.0300, 34.5246, 86.8301];
                break;
                case(isRaw&&isBench):
                vars = [25.0485, 43.8480, 6.7172, 13.9520];
                break;
                case(!isRaw&&!isBench):
                vars = [176.5800, 373.3150, 48.4534, 110.0103];
                break;
                case(!isRaw&&isBench):
                vars = [49.1060, 124.2090, 23.1990, 67.4926];
                break;
            }
        
        }



        if(total>0){
            IPFpoints = 500+100*(total-(vars[0]*Math.log(weight)-vars[1]))/(vars[2]*Math.log(weight)-vars[3]);
            IPFpoints = Math.round(IPFpoints*100)/100;
        }

        this.setState({
            totalPoints: IPFpoints
        })
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
                                leftIcon={
                                    <Icon
                                      name='create'
                                      size={24}
                                      color='black'
                                    />
                                  }
                            />
                            <Text>Person's weight</Text>
                            <Input
                            placeholder="Weight"
                                style={styles.inputText}
                                onChangeText={(weight) => this.setState({weight})}
                                value={weight}
                                leftIcon={
                                    <Icon
                                      name='create'
                                      size={24}
                                      color='black'
                                    />
                                  }
                            />
                    </View>

                    <View style={[styles.child]}>
                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='Male'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isMale}
                    onPress={() => this.setState({isMale: !this.state.isMale})}
                    />
                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='Female'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!this.state.isMale}
                    onPress={() => this.setState({isMale: !this.state.isMale})}
                    />
                    </View>

                    <View style={[styles.child]}>
                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='Raw'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isRaw}
                    onPress={() => this.setState({isRaw: !this.state.isRaw})}
                    />
                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='Equiped'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!this.state.isRaw}
                    onPress={() => this.setState({isRaw: !this.state.isRaw})}
                    />

                    </View>

                    <View style={[styles.child]}> 

                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='3-Lift'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!this.state.isBench}
                    onPress={() => this.setState({isBench: !this.state.isBench})}
                    />  
        
                    <CheckBox
                    containerStyle={styles.checkBox}
                    center
                    title='Bench'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.isBench}
                    onPress={() => this.setState({isBench: !this.state.isBench})}
                    />
                    
                    </View>


            </View>


            <Text h4>Points: </Text>
            <Text h4>{totalPoints}</Text>
            <Button
              icon={
                <Icon
                type= 'material-community'
                 color= '#FFF'
                    name= 'share'
                />
              }
  onPress={() => this.getTotal(weight,total,isMale,isRaw,isBench)}
  title="Calculate"
  color="#841584"
  accessibilityLabel="Calculate points"
/>
            
          </Card>
          
        )
    }
}

const styles = StyleSheet.create({
   
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
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems:'center',
        justifyContent:'center',

    },
    checkBox: {
        width: "45%"
    }

})