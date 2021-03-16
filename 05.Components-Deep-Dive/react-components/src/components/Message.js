import { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super()
        this.state = { company: 'Shtekata' };
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Mount')
        // setTimeout(() => this.forceUpdate(), 1000);
        setTimeout(() => this.setState({ company: 'Shtekata - gesheval@gmail.com' }), 3000);
    }

    componentDidUpdate() {
        console.log('Update')
        // setTimeout(() => this.setState({ company: 'Shtekata - gesheval@gmail.com' }), 1000);
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    render() {
        // Inline css
        let style = {
            backgroundColor: 'pink',
            fontSize: 17
        };
        if (true) style.textDecoration = 'underline';

        //Dynamic classes
        let classes = ['selected-book'];
        if (true) classes.push('book-article');

        console.log('Render')
        // return <span style={style}>{this.props.text} | {this.state.company}</span>
        return <span className={classes.join(' ')}>{this.props.text} | {this.state.company}</span>
    }
}

export default Message;
