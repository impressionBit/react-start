import React from 'react';
import {connect} from "react-redux";
import {FormattedMessage} from 'react-intl';
import {
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

import {setLocale} from 'app/action/actions';

class Locale extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false,
            locale: props.state.locale
        };
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    setLanguage(locale) {
        this.setState({locale});
        this.props.setLocale(locale);
    }

    render() {
        const {open, locale} = this.state;
        return (
            <Dropdown nav isOpen={open} toggle={this.toggle}>
                <DropdownToggle nav caret>
                    <FormattedMessage id='app.language'/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active={locale === 'ru'}
                                  onClick={() => this.setLanguage('ru')}>RU</DropdownItem>
                    <DropdownItem active={locale === 'en'}
                                  onClick={() => this.setLanguage('en')}>EN</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = state => ({
    state: state.intl
});

const mapDispatchToProps = dispatch => ({
    setLocale: locale => dispatch(setLocale(locale))
});


export default connect(mapStateToProps, mapDispatchToProps)(Locale);