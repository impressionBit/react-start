import React from 'react';
import TestComponent from 'app/components/test/TestComponent';
import {FormattedMessage} from "react-intl";
import {Jumbotron} from 'reactstrap';

export function TestLayout() {
    return (
        <div>
            <Jumbotron>
                <h5><FormattedMessage id='app.page.test.text'/></h5>
            </Jumbotron>
            <TestComponent/>
        </div>
    );
}

export default TestLayout;