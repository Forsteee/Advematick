import React, { Component } from 'react';
import './Setperformers.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
const axios = require('axios');
export class Setperformers extends Component {
    static displayName = Setperformers.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            order: [],
            id: props.match.params.id,
            performersName:'',
            inn:'',
            telephone:'',
            email:'',
            img:'',
        };
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangeinn = this.handleChangeinn.bind(this);
        this.handleChangetelephone = this.handleChangetelephone.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangeimg = this.handleChangeimg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangename(event) {
        this.setState({performersName: event.target.value});
    }
    handleChangeinn(event) {
        this.setState({inn: event.target.value});
    }
    handleChangetelephone(event) {
        this.setState({telephone: event.target.value});
    }
    handleChangeemail(event) {
        this.setState({email: event.target.value});
    }
    handleChangeimg(event) {
        this.setState({img: event.target.value});
    }
    handleSubmit(event) {
            /*axios.put(`http://localhost:3001/orders/update/${this.state.id}`,{
                    Name: this.state.performersName,
                    inn: this.state.inn,
                    telephone: this.state.telephone,
                    email: this.state.email,
                    img: this.state.img,
                    Dateend: this.state.dateend,
                    Stage:'2',
                }
            );
            axios.post(`http://localhost:3001/orders_progress/add`,{
                    Stage: "1",
                    email: "0".toString(),
                    inn: "Согласовать с заказчиком".toString(),
                    Orders_id: this.state.id,
                }

            );*/
            event.preventDefault();
    }

    /**/
    componentDidMount() {
        const {id} = this.state;
        fetch(`http://localhost:3001/performers/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        order: result,
                        performersName:result.name,
                        inn:result.inn,
                        telephone:result.telephone,
                        email:result.email,
                        img:result.img,
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group pt-5">
                            <label htmlFor="formGroupExampleInput">Имя исполнителя</label>
                            <input type="text" className="form-control" id="performersName"
                                   placeholder="" value={this.state.performersName} onChange={this.handleChangename}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">ИНН</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.inn} onChange={this.handleChangeinn}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Телефон</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.telephone} onChange={this.handleChangetelephone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">E-mail</label>
                            <input type="email" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.email} onChange={this.handleChangeemail}/>s
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-date-input">Ссылка на изображение</label>
                            <input className="form-control" type="text" value={this.state.img} onChange={this.handleChangeimg}/>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example" id="m">
                        <NavLink>
                            <input type="submit" className="btn btn-primary" id="save" onClick="this.disabled=true" value="Сохранить"/>
                        </NavLink>
                        <NavLink tag={Link} to="/performers">
                            <button type="button" className="btn btn-primary" id="cancel">Назад</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
export default Setperformers;