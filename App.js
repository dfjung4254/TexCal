import React, {Component} from 'react';
import {
  StyleSheet, Button, View
} from 'react-native';
import TestComponent from './TestComponent';

const datas = [
  {id:"jkh", count:3, color:"red"},
  {id:"jjh", count:2, color:"blue"},
  {id:"jjs", count:1, color:"green"},
];

type Props = {};
export default class App extends Component<Props>{
  
  /* 생성자 */
  constructor(props){
    super(props);
    this.state={datas:datas};
  }

  /* 버튼 업데이트 함수 */
  _updateCount(idx){
    const newDatas = [...this.state.datas];
    newDatas[idx].count = newDatas[idx].count + 1;
    this.setState({datas:newDatas});
  }

  render(){
    return(
      <View style={StyleSheet.container}>
        {
          this.state.datas.map((data,index) => {
            return(
              <TestComponent
                key={data.id}
                id={data.id}
                color={data.color}
                title={data.count.toString()}
                updateCount={this._updateCount.bind(this, index)}
              />
            )
          })
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:20,
  }
})
