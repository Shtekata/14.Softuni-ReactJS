import { Component } from 'react';
import Message from './Message';

class Footer extends Component {
    constructor(props) { super(); this.state = { showFooter: true } };

    componentDidMount() {
        setTimeout(() => this.setState({ showFooter: false }), 6000);
    };

    render() {
        return this.state.showFooter && <Message text='All rights reserved &copy;'/>
    }
}

export default Footer;