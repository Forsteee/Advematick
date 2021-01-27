import React, { Component } from 'react';
import './Setorders.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
const axios = require('axios');
export class Setorders extends Component {
    static displayName = Setorders.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            order: [],
            id: props.match.params.id,
            orderName:'',
            discription:'',
            informofprod:'',
            price:'',
            datestart:'',
            dateend:'',
        };
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangediscription = this.handleChangediscription.bind(this);
        this.handleChangeinformofprod = this.handleChangeinformofprod.bind(this);
        this.handleChangeprice = this.handleChangeprice.bind(this);
        this.handleChangedatestart = this.handleChangedatestart.bind(this);
        this.handleChangedateend = this.handleChangedateend.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangename(event) {
        this.setState({orderName: event.target.value});
    }
    handleChangediscription(event) {
        this.setState({discription: event.target.value});
    }
    handleChangeinformofprod(event) {
        this.setState({informofprod: event.target.value});
    }
    handleChangeprice(event) {
        this.setState({price: event.target.value});
    }
    handleChangedatestart(event) {
        this.setState({datestart: event.target.value});
    }
    handleChangedateend(event) {
        this.setState({dateend: event.target.value});
    }
    handleSubmit(event) {
            axios.put(`http://localhost:3001/orders/update/${this.state.id}`,{
                    Name: this.state.orderName,
                    Discription: this.state.discription,
                    Informofprod: this.state.informofprod,
                    Price: this.state.price,
                    Datestart: this.state.datestart,
                    Dateend: this.state.dateend,
                    Stage:'2',
                }
            );
            axios.post(`http://localhost:3001/orders_progress/add`,{
                    Stage: "1",
                    Price: "0".toString(),
                    Discription: "Согласовать с заказчиком".toString(),
                    Orders_id: this.state.id,
                }

            );
            event.preventDefault();
    }

    /**/
    componentDidMount() {
        const {id} = this.state;
        fetch(`http://localhost:3001/orders/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        order: result,
                        orderName:result.name,
                        discription:result.discription,
                        informofprod:result.informaprod,
                        price:result.price,
                        datestart:result.date_start,
                        dateend:result.date_end,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const {error, isLoaded,order} = this.state;
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
                    <table className="table table-borderless col-md-6 pt-3">
                        <thead>
                        {order.map(orders =>
                        <tr className='tr-m'>
                            <th className="align-middle">  <img className="logo" src={`${orders.imgclient}`} alt=""/> </th>
                            <th className="align-middle">{orders.nameclient}</th>
                            <th className="align-middle">
                               Телефон: {orders.telephoneclient}<br/>
                               E-mail: {orders.emailclient}<br/>
                               Город: {orders.cityclient}<br/>
                            </th>
                        </tr>)}
                        </thead>
                    </table>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group pt-5">
                            <label htmlFor="formGroupExampleInput">Название проекта</label>
                            <input type="text" className="form-control" id="orderName"
                                   placeholder="" value={this.state.orderName} onChange={this.handleChangename}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Описание проекта</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.discription} onChange={this.handleChangediscription}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Описание продукции</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.informofprod} onChange={this.handleChangeinformofprod}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Бюджет, ₽</label>
                            <input type="number" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.price} onChange={this.handleChangeprice}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-date-input">Дата начала</label>
                            <input className="form-control" type="date" value={this.state.datestart} onChange={this.handleChangedatestart}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-date-input">Дата конца</label>
                            <input className="form-control" type="date" value={this.state.dateend} onChange={this.handleChangedateend}/>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example" id="m">
                        <NavLink>
                            <input type="submit" className="btn btn-primary" id="save" onClick="this.disabled=true" value="Сохранить"/>
                        </NavLink>
                        <NavLink tag={Link} to="/leads">
                            <button type="button" className="btn btn-primary" id="cancel">Назад</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
export default Setorders;