import React, { Component} from 'react';
import './Clients.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Clients extends Component {
    static displayName = Clients.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            clients: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/clients')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        clients: result
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
        const {error, isLoaded, clients} = this.state;
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
                    <div className="clients">
                    <table className="table table-borderless col-md-10 m-auto">
                        <thead>
                        {clients.map(client =>
                            <tr className='tr-m'>
                                <th className="align-middle">
                                    {client.name}<br/>
                                    Телефон: {client.telephone}<br/>
                                    E-mail: {client.email}<br/>
                                </th>
                                <th className="align-middle">{client.discription}</th>
                                <th className="align-middle">
                                    <NavLink tag={Link} to={`/emails/${client.id}`}>
                                    <button type="button" className="btn btn-primary" id="buttons">Отправить сообщение по e-mail</button>
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
export default Clients;