import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    // react code snippet을 설치했다면 => 단축어 scu
    // 원래는 default로 true를 리턴하지만, 변경 내역이 있을 때만 true를 리턴시켜줌으로써 성능 최적화
    shouldComponentUpdate(nextProps, nextState){
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // 값을 반전시켜주는 함수
    handleToggleEdit = () => {
        // true -> false로 전환될 때 : onUpdate 된다는 사실을 부모에게 알린다.
        // false -> true로 전환될 때 : state에 info 값들 넣어주기
        const { info, onUpdate } = this.props;

        if(this.state.editing){ // true -> false 전환
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }else{  // false -> true 전환
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        this.setState({
            editing: !this.state.editing
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone } = this.props.info;
        const { editing } = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div><input name="name" onChange={this.handleChange} value={this.state.name}/></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone}/></div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;