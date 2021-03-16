import { Component } from 'react';

function refreshComponent(WrappedComponent, time = 10000) {
    return class extends Component {
        constructor(props) { super(); this.state = { refreshCount: 0 } };

        componentDidMount() {
            setTimeout(() => {
                this.setState(() => ({ refreshCount: this.state.refreshCount + 1 }));
            }, time);
        };

        render() {
            return <WrappedComponent {...this.props} refreshCount={this.state.refreshCount} />
        }
    }
}

export default refreshComponent;