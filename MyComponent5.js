import React, { Component } from "react";
import {View, Button} from 'react-native'

export default class MyComponent5 extends Component{
    render(){
        return(
            <View>
                {/* 버튼에 설정할 전달받은 속성값들(props)가 여러개일때 한방에 적용 */}
                {/* ... 스프레드 연산자 : 멤버변수들이 속성으로 알아서 적용됨 */}
                <Button {...this.props}></Button>
            </View>
        )
    }    
}