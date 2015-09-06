import React from 'react';
import styles from './styles';

let {PropTypes} = React;

export default class WidgetDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        };
    }
    update() {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <div>
                <button onClick={this.update.bind(this)}>{this.state.count}</button>
            </div>
        );
    }
}
WidgetDemo.propTypes = {
    name: PropTypes.string,
    initialCount: PropTypes.number
};
WidgetDemo.defaultProps = {
    name: 'Guest',
    initialCount: 5
};

React.render( <WidgetDemo />,  document.getElementById('widget-id'));
