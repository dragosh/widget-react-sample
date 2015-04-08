import React from 'react';
let {PropTypes} = React;
let styles = {
  container: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20
  }
};

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
            <div style={styles.container}>
                <h1>Hello, {this.props.name}!</h1>
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
