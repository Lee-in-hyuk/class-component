import { Component } from 'react';
class Hello extends Component {
    // props로 설정된 값이 없을 때 static defaultProps로 기본값을 설정할 수 있음.
    static defaultProps = {
        name: "이름"
    }
    render() {
        const { color,name } = this.props;
        return(
            <div>{name}님 안녕하세요. 당신이 좋아하는 색상은 {color}입니까?</div>
        )
    }
}
export default Hello;