import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'app/application/application';

const {document} = window;

function render() {
    ReactDOM.render(<Application/>, window.document.getElementById('root'));
}

document.addEventListener('DOMContentLoaded', render);
