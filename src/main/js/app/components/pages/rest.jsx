import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import *as url from 'app/axios/url';
import {
    Button,
    Container,
    Row,
    Col,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
    Jumbotron
} from 'reactstrap';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl';

class RestLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            users: [],
            userName: '',
            userRole: '',
            userPassword: ''
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        axios.get(url.rest)
            .then(res =>
                this.setState({users: res.data})
            )
    }

    render() {
        const {modal, users, userName, userRole, userPassword} = this.state;
        const {intl} = this.props;
        return (
            <div>
                <Jumbotron>
                    <h5><FormattedMessage id='app.page.rest.text.first'/></h5>
                    <h5><FormattedMessage id='app.page.rest.text.second'/></h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col xs="9">
                            <h1><FormattedMessage id='app.user.table.title'/></h1>
                        </Col>
                        <Col xs="3" style={{marginTop: '10px'}}>
                            <Button color="primary"
                                    onClick={() => {
                                        this.toggle();
                                        this.setState(
                                            {userName: '', userRole: '', userPassword: ''}
                                        )
                                    }}>
                                <FormattedMessage id='app.user.table.add'/>
                            </Button>
                            <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>
                                    <FormattedMessage id='app.user.table.add'/>
                                </ModalHeader>
                                <ModalBody>
                                    <Input type="text" name="name" id="userName"
                                           placeholder={intl.formatMessage({id: 'app.user.table.name'})}
                                           value={userName}
                                           onChange={value => this.setState({userName: value.target.value})}/>
                                    <br/>
                                    <Input type="text" name="role" id="userRole"
                                           placeholder={intl.formatMessage({id: 'app.user.table.role'})}
                                           value={userRole}
                                           onChange={value => this.setState({userRole: value.target.value})}/>
                                    <br/>
                                    <Input type="text" name="password" id="userPassword"
                                           placeholder={intl.formatMessage({id: 'app.user.table.password'})}
                                           value={userPassword}
                                           onChange={value => this.setState({userPassword: value.target.value})}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary"
                                            onClick={() => {
                                                axios.put(url.rest,
                                                    {},
                                                    {params: {name: userName, role: userRole, password: userPassword}})
                                                    .then(res =>
                                                        this.setState({users: res.data})
                                                    );
                                                this.toggle();
                                            }}>
                                        <FormattedMessage id='app.user.table.add'/>
                                    </Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                <tr>
                                    <th><FormattedMessage id='app.user.table.id'/></th>
                                    <th><FormattedMessage id='app.user.table.name'/></th>
                                    <th><FormattedMessage id='app.user.table.role'/></th>
                                    <th><FormattedMessage id='app.user.table.password'/></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map((item, index) =>
                                    <tr key={index}>
                                        <th>{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>{item.role}</th>
                                        <th>{item.password}</th>
                                        <th><Button color="secondary" size="sm"
                                                    onClick={() => {
                                                        axios.delete(url.rest, {params: {id: item.id}})
                                                            .then(res =>
                                                                this.setState({users: res.data})
                                                            )
                                                    }}>
                                            <FormattedMessage id='app.user.table.delete'/>
                                        </Button></th>
                                    </tr>)
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    };

}

RestLayout.propTypes = {
    intl: intlShape.isRequired
};

const mapStateToProps = state => ({
    state: state.state.value
});

export default connect(mapStateToProps)(injectIntl(RestLayout));