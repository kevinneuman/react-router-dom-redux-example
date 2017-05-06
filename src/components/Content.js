import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';

const paperStyle = {
    width: 400,
    margin: 40,
    padding: 40,
    textAlign: 'center',
    display: 'inline-block',
};

class Content extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={1}>
                <h1>{this.props.title}</h1>

                <Link to={this.props.link}>
                    <FlatButton
                        label={this.props.label}
                        primary={true}
                        icon={<NavigateNext />}
                    />
                </Link>
            </Paper>
        );
    }
}

export default Content;