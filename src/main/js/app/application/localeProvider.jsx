import React from 'react';
import {connect} from "react-redux";
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import {IntlProvider, addLocaleData} from 'react-intl'
import messageEn from 'app/i18n/messages-en';
import messageRu from 'app/i18n/messages-ru';

function intlLocaleProviderComponent(props) {
    const {locale, children} = props;
    const message = {en: messageEn, ru: messageRu};
    addLocaleData([...en, ...ru]);
    return (
        <IntlProvider
            key={locale}
            locale={locale}
            messages={message[locale]}>
            {children}
        </IntlProvider>
    );
}

const mapStateToProps = state => ({
    locale: state.intl.locale
});

export default connect(mapStateToProps)(intlLocaleProviderComponent);