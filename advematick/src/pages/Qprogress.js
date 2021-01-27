import React, { Component } from 'react';
import './Qprogress.css';
import {NavbarBrand, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import toRight from '../images/toRight.png';
import finish from '../images/finish.png';
const axios = require('axios');

export class Qprogress extends Component {
    static displayName = Qprogress.name;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            orders: [],
            orders_id: props.match.params.id,
            stage1 : [],
            stage2 : [],
            stage3 : [],
            stage4 : [],
            stage5 : [],
            stage6 : [],
            price:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const {orders_id} = this.state;
        fetch(`http://localhost:3001/ordersprogress/${orders_id}`)
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
            )
    }
    handleSubmit(event) {
        axios.put(`http://localhost:3001/orders/update/${this.state.orders_id}`,{
                Price: this.state.price,
                Stage:'3',
            }
        );
        event.preventDefault();
    }
    splitforstage(orders){
        const stage1s = [];
        const stage2s=[];
        const stage3s=[];
        const stage4s=[];
        const stage5s=[];
        const stage6s=[];
        var finaleprice = 0;
        orders.forEach(function(item, i) {
            finaleprice+= parseInt(item.price);
            if(item.stage=="1"){
                stage1s.push(item);
            }else if(item.stage=="2"){
                stage2s.push(item);
            }else if(item.stage=="3"){
                stage3s.push(item);
            }else if(item.stage=="4"){
                stage4s.push(item);
            }else if(item.stage=="5"){
                stage5s.push(item);
            }else if(item.stage=="6"){
                stage6s.push(item);
            }
        });
        if(stage6s.length>0){
            this.setState({
                price: finaleprice.toString()
            })
        }
        this.setState({
            stage1: stage1s,
            stage2: stage2s,
            stage3: stage3s,
            stage4: stage4s,
            stage5: stage5s,
            stage6: stage6s,
        })
    }
    render() {
        const {error, isLoaded,stage1,stage2,stage3,stage4,stage5,stage6,orders} = this.state;
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
                <div className="containers">
                    <table className="table table-borderless col-md-10 m-auto pt-3">
                        <thead>
                        {stage1.map(order =>
                            <tr className='tr-m'>
                                <th className="align-middle">
                                    Название заказа {order.nameorder}<br/>

                                </th>
                                <th className="align-middle">
                                    Описание заказа: {order.discriptionorder}<br/>
                                    Опиание продукта: {order.informaprodorder}<br/>
                                </th>
                            </tr>)}
                        </thead>
                    </table>
                    <div className="row">
                        <div className="col p-0 ml-4">
                            <div className="stage1">Собрать данные для КП</div>
                            {stage1.map(stage =>
                                <div> <h1 className="text-center">{stage.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <NavLink className="text-right" tag={Link} to={`/createstage/${ this.state.orders_id}/2`}>
                                            <img className="toRight" src={toRight} alt="logo" />
                                        </NavLink>
                                    </div>
                                </div>
                                </div>)}
                        </div>
                        <div className="col p-0 m-0">
                            <div className="stage2">Подготовить и отправить КП</div>
                            {stage2.map(stage =>
                                <div> <h1 className="text-center">{stage.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <NavLink className="text-right" tag={Link} to={`/createstage/${ this.state.orders_id}/3`}>
                                            <img className="toRight" src={toRight} alt="logo" />
                                        </NavLink>
                                    </div>
                                </div></div> )}
                        </div>
                        <div className="col p-0 m-0">
                            <div className="stage3">Согласовать условия работы</div>
                            {stage3.map(stage =>
                                <div> <h1 className="text-center">{stage.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <NavLink className="text-right" tag={Link} to={`/createstage/${ this.state.orders_id}/4`}>
                                            <img className="toRight" src={toRight} alt="logo" />
                                        </NavLink>
                                    </div>
                                </div> </div>)}
                        </div>
                        <div className="col p-0 m-0">
                            <div className="stage4">Заключить договор</div>
                            {stage4.map(stage =>
                                <div> <h1 className="text-center">{stage.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <NavLink className="text-right" tag={Link} to={`/createstage/${ this.state.orders_id}/5`}>
                                            <img className="toRight" src={toRight} alt="logo" />
                                        </NavLink>
                                    </div>
                                </div> </div>)}
                        </div>
                        <div className="col p-0 m-0">
                            <div className="stage5">Получить оплату</div>
                            {stage5.map(stage =>
                                <div> <h1 className="text-center">{stage.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <NavLink className="text-right" tag={Link} to={`/createstage/${ this.state.orders_id}/6`}>
                                            <img className="toRight" src={toRight} alt="logo" />
                                        </NavLink>
                                    </div>
                                </div></div> )}
                        </div>
                        <div className="col p-0 m-0">
                            <div className="stage6">Передать в производство</div>
                            {stage6.map(stage =>
                                <div> <h1 className="text-center">{this.state.price}, ₽</h1>
                                <div className="card mt-3" id="cards">
                                    <img className="card-img-top"
                                         alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{stage.discription}</h4>
                                        <p className="card-text">
                                        </p>
                                        <form onSubmit={this.handleSubmit}>
                                            <NavLink>
                                                <input type="submit" className="btn btn-primary" id="finish" onClick="this.disabled=true" value="Завершить"/>
                                            </NavLink>
                                            <NavLink tag={Link} to={`/leads`}>
                                                <button type="button" className="btn btn-primary">Лиды</button>
                                            </NavLink>
                                        </form>
                                    </div>
                                </div> </div>)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Qprogress;