import React from 'react';
import {connect} from 'react-redux';
import {
    Alert,
    Container,
    Row,
    Col,
    Input,
    Jumbotron
} from 'reactstrap';
import {FormattedMessage, injectIntl} from "react-intl";
import {setValue} from "app/action/actions";

export function StateLayout(props) {

    const {intl, state, setValue} = props;
    return (
        <div>
            <Jumbotron>
                <h5><FormattedMessage id='app.page.state.text'/></h5>
        </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Alert color="light">
                            <FormattedMessage id='app.state.input.message'/>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" id="inputState"
                               value={state.value}
                               onChange={value => setValue(value.target.value)}/>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert color="light">
                            {state.value}
                        </Alert>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

const mapStateToProps = state => ({
    state: state.state
});

const mapDispatchToProps = dispatch => ({
    setValue: value => dispatch(setValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(StateLayout));