import React, { Component} from 'react';
import './Companies.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Companies extends Component {
    static displayName = Companies.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            companies: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/companies')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        companies: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, companies} = this.state;
        if (error) {
            return (
                <div className="col">
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="col">
                    Loading...
                </div>
            );
        } else {
            return (
                <div className="parent">
                    <div className="companies">
                        <table className="table table-borderless col-md-10 m-auto pt-3">
                            <thead>
                        {companies.map(company =>
                                        <tr className='tr-m'>
                                            <th className="align-middle">  <img className="logo" src={`${company.img}`} alt=""/> </th>
                                            <th className="align-middle">{company.name}</th>
                                            <th className="align-middle">
                                                Телефон: {company.telephone}<br/>
                                                E-mail: {company.email}<br/>
                                                Местонахождение: {company.location}<br/>
                                                ИНН: {company.inn}<br/>
                                            </th>
                                            <th className="align-middle">
                                                <NavLink tag={Link} to={`/upcompanies/${company.id}`}>
                                                <button type="button" className="btn btn-primary" id="buttons">Изменить данные</button>
                                                </NavLink>
                                            </th>
                                        </tr>)}
                            </thead>
                        </table>
                    </div>
                </div>

            );
        }
    }
}
export default Companies;