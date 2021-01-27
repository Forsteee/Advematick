import React, { Component} from 'react';
import './Performers.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Performers extends Component {
    static displayName = Performers.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            performers: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/performers')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        performers: result
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
        const {error, isLoaded, performers} = this.state;
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
                        {performers.map(performer =>
                                        <tr className='tr-m'>
                                            <th className="align-middle">  <img className="logo" src={`${performer.img}`} alt=""/> </th>
                                            <th className="align-middle">{performer.name}</th>
                                            <th className="align-middle">
                                                Телефон: {performer.telephone}<br/>
                                                E-mail: {performer.email}<br/>
                                                ИНН: {performer.inn}<br/>
                                            </th>
                                            <NavLink tag={Link} to={`/setperformers/${performer.id}`}>
                                            <th className="align-middle"> <button type="button" className="btn btn-primary" id="buttons">Изменить данные</button></th>
                                            </NavLink>
                                        </tr>)}
                            </thead>
                        </table>
                    </div>
                </div>

            );
        }
    }
}
export default Performers;