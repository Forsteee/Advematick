import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Leads } from './pages/Leads';
import { Companies } from './pages/Companies';
import { Clients } from './pages/Clients';
import { Performers } from './pages/Performers';
import { Qprogress } from './pages/Qprogress';
import { Setorders } from './pages/Setorders';
import { UpCompanies } from './pages/UpCompanies';
import { CreateStage } from './pages/CreateStage';
import { Emails } from './pages/Emails';
import { Setperformers } from './pages/Setperformers';

export default class App extends Component {
    static displayName = App.name;

    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/leads' component={Leads} />
                <Route path='/companies' component={Companies} />
                <Route path='/clients' component={Clients} />
                <Route path='/performers' component={Performers} />
                <Route path='/qprogress/:id' component={Qprogress} />
                <Route path='/setorders/:id' component={Setorders} />
                <Route path='/upcompanies/:id' component={UpCompanies} />
                <Route path='/createstage/:id/:stage' component={CreateStage} />
                <Route path='/emails/:id' component={Emails} />
                <Route path='/setperformers/:id' component={Setperformers} />
            </Layout>
        );
    }
}