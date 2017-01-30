import install from 'react-redux-provide/src/install'
import React from 'react'
import {pushReplicator} from 'react-redux-provide'
import ReactDOM  from 'react-dom';
import Providers from './providers'
import Replicator from './replicators/testReplicator'
pushReplicator(Providers.providers,Replicator)
import gabo from '../css/app.css'
//console.log(gabo)
import App from './components/app';

ReactDOM.render(<App {...Providers} />, document.getElementById("container"));
