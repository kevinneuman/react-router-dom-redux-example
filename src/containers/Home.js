import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/page';
import Content from '../components/Content';

class Home extends Component {
    componentDidMount() {
        this.props.changeTitle('HOME');
    }

    render() {
        return (
            <div>
                <Content
                    title={this.props.page.title}
                    link={'somepage'}
                    label={'SomePage Link'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);