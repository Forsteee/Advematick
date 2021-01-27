import React, { Component} from 'react';
import './Emails.css';
import Clients from "./Clients";
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import {Divider} from "antd";
export class Emails extends Component {
    static displayName = Emails.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            clients: [],
            id: props.match.params.id,
            clientName:'',
            mailTheme:'',
            messege:'',
            img:'',
        };
        this.handleChangeclientName = this.handleChangeclientName.bind(this);
        this.handleChangemailTheme = this.handleChangemailTheme.bind(this);
        this.handleChangmessege = this.handleChangmessege.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeclientName(event) {
        this.setState({clientName: event.target.value});
    }
    handleChangemailTheme(event) {
        this.setState({mailTheme: event.target.value});
    }
    handleChangmessege(event) {
        this.setState({messege: event.target.value});
    }
    handleSubmit(event) {

        event.preventDefault();
    }
    componentDidMount() {
        const {id} = this.state;
        fetch(`http://localhost:3001/clients/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        clients: result,
                        clientName:result.name,
                        img:result.img,
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
        const {error, isLoaded,img,clientName} = this.state;
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
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group pt-5">
                            <div className="form-control-lg w-100" id="name">
                                <img className="logo" src={`${img}`} alt=""/>
                                {clientName}
                            </div>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Тема" value={this.state.mailTheme} onChange={this.handleChangemailTheme}/>
                            <textarea className="form-control" id="formGroupExampleInput2" rows="10"
                                      placeholder="Введите сообщение" value={this.state.messege} onChange={this.handleChangmessege}/>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example" id="m">
                            <NavLink>
                                <input type="submit" className="btn btn-primary" id="save" onClick="this.disabled=true" value="Отправить"/>
                            </NavLink>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
export default Clients;