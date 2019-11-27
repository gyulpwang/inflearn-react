import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{

  id = 0; // id는 렌더링 되는 값이 아니라 굳이 state에 설정 X

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '성규림',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '성귤퐝',
        phone: '010-0000-0003'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    // react에서는 기존의 값은 불변해야함. 기존 값을 기반으로 새로 구성해야함.
    // 배열의 경우 내장함수인 concat 사용 : 기존에 있던 배열은 수정하지 않고 새로운 배열을 만들어서 그 배열에다가 데이터를 집어넣어서 그 배열을 기존의 배열에 넣어주는 작업을 하는것.
    const {information} = this.state; // 비구조 할당 문법을 사용
    this.setState({
      /* information: information.concat({
        // 첫 번째 방법(cf. ... : spread 문법)
        //...data,

        // 두 번째 방법
        name: data.name, 
        phone: data.phone,

        id: this.id++
      }) */

      // 세 번째 방법 : 빈 객체에 data를 집어넣는 방식
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
        information : information.map(
            info => {
                if(info.id === id){
                    return {
                        id, 
                        ...data,    // name, phone 값이 들어가도록
                    };
                }
                return info;
            }
        )
    });
}

  render(){
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
