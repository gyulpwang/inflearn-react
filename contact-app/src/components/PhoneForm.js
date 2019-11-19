import React, {Component} from 'react';

/*
꿀팁!
왼쪽 사이드바 가장 하단의 테트리스 모양 아이콘(확장 프로그램)을 클릭하여 reactjs code snippet이라고 검색하면
charalampos karypidis라는 사람이 만든 Reactjs code snippets라는 확장 프로그램이 있는데,
이걸 설치 후 rcc라고 하면 클래스형 컴포넌트, rcs라고 하면 함수형 컴포넌트를 자동으로 생성해준다!
*/
class PhoneForm extends Component {

    state = {
        name : '',
        phone : '',
    }

    handleChange = (e) => {
        this.setState({
            // 객체 안에서 사용되는 [e.target.name] : "속성 계산명"이라는 문법
            // e.target = input
            // e.target.value = input의 value 값
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 원래 해야할 작업을 안 하는 것(여기서는 새로고침을 방지)
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;