import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    // 2. data가 없을 경우에 대한 조치 - 기본 값 지정. defaultProps 사용 시에는 static을 앞에 붙여준다!
    static defaultProps = {
        data: []
    }

    render() {
        const {data, onRemove, onUpdate} = this.props;    // 비구조 할당을 통해 레퍼런스 만들어줌
        
        console.log('rendering list')
        
        // 1. data가 없을 경우에 대한 조치 - 아예 이후 로직 수행 X
        //if(!data) return null;

        const list = data.map(
            // data 안의 info라는 것을 PhoneInfo 컴포넌트에게 전달
            // key : 컴포넌트를 여러개 렌더링하게 될 때 고유값을 정해줌으로써 업데이트 성능을 최적화
                  /* key가 없을 경우 배열의 인덱스를 가져다 사용하게 되는데,
                     배열의 인덱스와 key가 완전히 동일하지 않은 경우가 있을 수 있다.
                     ex. 배열의 일부 항목이 제거가 되는 경우 index != key */
            info => (<PhoneInfo
                        onRemove={onRemove}
                        info={info}
                        key={info.id}
                        onUpdate={onUpdate}
                    />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;