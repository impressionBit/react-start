import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from 'reactstrap';
import Locale from 'app/components/locale';
import {FormattedMessage} from 'react-intl';
import * as routers from 'app/constants/routes'
import ApplicationRouter from 'app/router/routerSwitch';

export default function IndexLayout(props) {

    return (
        <div>
            <Navbar color='dark' expand='lg'>
                <NavbarBrand href='/'><FormattedMessage id='app.react.start'/></NavbarBrand>
                <Nav>
                    <NavItem>
                        <Button color="primary" onClick={() => props.history.push(routers.index())}><FormattedMessage
                            id='app.home.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.state())}><FormattedMessage
                            id='app.state.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.rest())}><FormattedMessage
                            id='app.rest.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.websocket())}><FormattedMessage
                            id='app.websocket.title'/></Button>{` `}
                    </NavItem>
                </Nav>
                <Nav className='ml-auto' navbar>
                    <Locale/>
                </Nav>
            </Navbar>
            <ApplicationRouter/>
        </div>
    );
}
