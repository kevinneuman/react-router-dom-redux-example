import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class NavBar extends Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="react-router-dom-redux-example" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default NavBar;