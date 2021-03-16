import { Component } from 'react';
import refreshComponent from '../hoc/refreshComponent';
import Message from './Message';

class FooterHoc extends Component {
    constructor(props) { super() };
    render() {
        return this.props.refreshCount === 0 ? <h4>wait 10 sec!</h4> : <Message text='All rights reserved from Hoc! &copy;'/>
    }
}

export default refreshComponent(FooterHoc, 5000);