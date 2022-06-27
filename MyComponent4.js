import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

class MyComponent4 extends Component {

    // props가 전달되지 않았을때를 대비하기 위한 defaultProps 
    static defaultProps={
        title:'untitled',
        color:'orange',
        onPress:()=>{}
    }

    render(){
        return(
            <View style={{margin:8}}>
                <Button onPress={this.props.onPress} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}

export default MyComponent4