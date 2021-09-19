import React from 'react'
import ReactDOM from 'react-dom';
import Application from './app';
import Provider from './Store/provider';

ReactDOM.render(<Provider><Application/></Provider>, document.querySelector("#root"));