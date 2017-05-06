import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/page';
import Content from '../components/Content';

class SomePage extends Component {
    componentDidMount() {
        this.props.changeTitle('SOMEPAGE');
    }

    render() {
        return (
            <div>
                <Content
                    title={this.props.page.title}
                    link={'random'}
                    label={'Random Link'}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(pageActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SomePage);