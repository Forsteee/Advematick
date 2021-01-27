import React, { Component } from 'react';
import './Leads.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import toRight from "../images/toRight.png";
import plus from '../images/plus.png';
const axios = require('axios');


export class Leads extends Component {
    static displayName = Leads.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            orders: [],
            clients: [],
            clients_id:0,
            stage1 : [],
            stage2 : [],
            stage3 : [],
            name:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleChangename= this.handleChangename.bind(this);
        this.handleChangeclients = this.handleChangeclients.bind(this);
    }

    handleChangename(event) {
        this.setState({name: event.target.value});
    }
    handleChangeclients(event) {
        this.setState({clients_id: event.target.value});
    }
    handleSubmit(orders_id) {
        axios.put(`http://localhost:3001/orders/update/${orders_id}`,{
            Deleted:'1',
            }
        );
        //event.preventDefault();
    }
    handleSubmitAdd() {
        axios.post(`http://localhost:3001/orders/add`,{
            Name:this.state.name,
            Clients_id:this.state.clients_id,
            }
        );
        //event.preventDefault();
    }

    componentDidMount() {
        fetch('http://localhost:3001/orders')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        orders: result,
                    });
                    this.splitforstage(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        fetch('http://localhost:3001/clients')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        clients: result,
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
    splitforstage(orders){
        const stage1s = [];
        const stage2s=[];
        const stage3s=[];
        orders.forEach(function(item, i) {
            if(item.stage=="1"){
                stage1s.push(item);
            }else if(item.stage=="2"){
                stage2s.push(item);
            }else if(item.stage=="3"){
                stage3s.push(item);
            }
        });
        this.setState({
            stage1: stage1s,
            stage2: stage2s,
            stage3: stage3s,
        })
    }

    render() {
        const {error, isLoaded, clients,stage1,stage2,stage3} = this.state;
        if (error) {
            return (
                <div className="col">
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="col-2">
                    Loading...
                </div>
            );
        } else {
            return (
                <div className="container">
                        <div className="row m-3" >
                        <form className="" onSubmit={this.handleSubmitAdd}>
                            <label  className="col-sm col-form-label">Наименование проекта</label>
                            <div className="col-sm">
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.name} onChange={this.handleChangename}/>
                            </div>
                            <label className="col-sm col-form-label">Выберите клиента:</label>
                            <div className="col-sm">
                                <select className="form-control" value={this.state.clients_id} onChange={this.handleChangeclients}>
                                    <option value=""></option>
                                    {clients.map(client =>
                                        <option value={client.id}>{client.name}</option>
                                      )}
                                </select>
                            </div>
                            <NavLink>
                                <input type="submit" className="btn btn-primary" onClick="this.disabled=true" value="Добавить лида"/>
                            </NavLink>
                        </form>
                        </div>
                    <div className="row">
                        <div className="col">
                            <div className="notworked">Необработанные лиды</div>
                            {stage1.map(stage =>
                                <div className="card mt-3">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.name}</h4>
                                        <p className="card-text">
                                            Описание: {stage.discription}<br/>
                                            Описание товара: {stage.informaprod}<br/>
                                            Предполагаемая цена: {stage.price} Р.
                                        </p>
                                        <NavLink tag={Link} to={`/setorders/${stage.id}`}>
                                        <a href="" className="btn btn-primary">Постановка задачи</a>
                                        </NavLink>
                                    </div>
                                </div> )}
                        </div>
                        <div className="col">
                            <div className="working">В работе</div>
                            {stage2.map(stage =>
                                <div className="card mt-3">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.name}</h4>
                                        <p className="card-text">
                                            Описание: {stage.discription}<br/>
                                            Описание товара: {stage.informaprod}<br/>
                                            Предполагаемая цена: {stage.price} Р.
                                        </p>
                                        <NavLink tag={Link} to={`/qprogress/${stage.id}`}>
                                        <a href="" className="btn btn-primary">Прогресс задания</a>
                                        </NavLink>
                                    </div>
                                </div> )}
                        </div>
                        <div className="col">
                            <div className="compliting">Завершение</div>
                            {stage3.map(stage =>
                                <div className="card mt-3">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.name}</h4>
                                        <p className="card-text">
                                            Описание: {stage.discription}<br/>
                                            Описание товара: {stage.informaprod}<br/>
                                            Предполагаемая цена: {stage.price} Р.
                                        </p>
                                        <form onSubmit={this.handleSubmit(stage.id)}>
                                        <NavLink>
                                            <input type="submit" className="btn btn-primary" onClick="this.disabled=true" value="Завершить"/>
                                        </NavLink>
                                        </form>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Leads;