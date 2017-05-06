import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';
import Paper from 'material-ui/Paper';

const paperStyle = {
    width: 400,
    margin: 40,
    padding: 40,
    textAlign: 'center',
    display: 'inline-block',
};

let counterInterval;

class NotFound extends Component {
    componentDidMount() {
        this.startCounter();
    }

    componentWillUnmount() {
        clearInterval(counterInterval);

        this.props.counterReset();
    }

    startCounter() {
        counterInterval = setInterval(() => {
            if (this.props.counter.value < 1) {
                this.props.history.push('/');
            }

            else {
                this.props.counterDecrement();
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                <Paper style={paperStyle} zDepth={1}>
                    <h1>PAGE NOT FOUND :(</h1>
                    <h1>Redirecting in {this.props.counter.value}</h1>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(counterActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);