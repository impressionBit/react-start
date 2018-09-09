import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {Jumbotron} from 'reactstrap';

export function HomeLayout() {

    return (
        <Jumbotron>
            <h1><FormattedMessage id='app.page.main.text'/></h1>
        </Jumbotron>
    );
}

const mapStateToProps = state => ({
    value: state.state.value
});

export default connect(mapStateToProps)(HomeLayout);