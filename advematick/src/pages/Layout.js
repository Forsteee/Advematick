import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import './Layout.css'

export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div>
                <NavMenu />
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}