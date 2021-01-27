import React, { Component } from 'react';
import { Navbar, NavbarBrand,NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './NavMenu.css';

/*
    <div className="btn-group" role="group" aria-label="Basic example" id="m1">
                        <NavLink tag={Link} to="/auth">
                            <button type="button" className="btn" id = "butauth">Авторизация</button>
                        </NavLink>
                    </div>
*/

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render () {
        return (
            <header>
                <Navbar className="navbar navbar-expand-lg navbar-light bg">
                    <NavbarBrand tag={Link} to="/">
                        <img className="header-logo" src={logo} alt="logo" />
                    </NavbarBrand>
                    <form className="form">
                        <div className="btn-group" role="group" aria-label="Basic example" id="m">
                            <NavLink tag={Link} to="/leads">
                                <button type="button" className="btn btn-primary" id="buttons">Лиды</button>
                            </NavLink>
                            <NavLink tag={Link} to="/companies">
                                <button type="button" className="btn btn-primary" id="buttons">Компании</button>
                            </NavLink>
                            <NavLink tag={Link} to="/performers">
                                <button type="button" className="btn btn-primary" id="buttons">Исполнители</button>
                            </NavLink>
                            <NavLink tag={Link} to="/clients">
                                <button type="button" className="btn btn-primary" id="buttons">Клиенты</button>
                            </NavLink>
                        </div>
                    </form>
                </Navbar>
            </header>
        );
    }
}