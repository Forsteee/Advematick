import React, { Component } from 'react';
import './UpCompanies.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
const axios = require('axios');
export class UpCompanies extends Component {
    static displayName = UpCompanies.name;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            order: [],
            id: props.match.params.id,
            companyName:'',
            inn:'',
            location:'',
            telephone:'',
            email:'',
            img:'',
        };
        this.handlecompanyName = this.handlecompanyName.bind(this);
        this.handleChangeinn = this.handleChangeinn.bind(this);
        this.handleChangelocation = this.handleChangelocation.bind(this);
        this.handleChangetelephone = this.handleChangetelephone.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangeimg = this.handleChangeimg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlecompanyName(event) {
        this.setState({companyName: event.target.value});
    }
    handleChangeinn(event) {
        this.setState({inn: event.target.value});
    }
    handleChangelocation(event) {
        this.setState({location: event.target.value});
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
            axios.put(`http://localhost:3001/companies/update/${this.state.id}`,{
                    Name: this.state.companyName,
                    Inn: this.state.inn,
                    Location: this.state.location,
                    Telephone: this.state.telephone,
                    Email: this.state.email,
                    Img: this.state.img,
                }
            );
            event.preventDefault();
    }
    componentDidMount() {
        const {id} = this.state;
        fetch(`http://localhost:3001/companies/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        companies: result,
                        companyName:result.name,
                        inn:result.inn,
                        location:result.location,
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
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group pt-5">
                            <label htmlFor="formGroupExampleInput">Название компании</label>
                            <input type="text" className="form-control" id="orderName"
                                   placeholder="" value={this.state.companyName} onChange={this.handlecompanyName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">ИНН</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.inn} onChange={this.handleChangeinn}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Адресс компании</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.location} onChange={this.handleChangelocation}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Контактный телефон</label>
                            <input type="number" className="form-control" id="formGroupExampleInput2"
                                   placeholder="" value={this.state.telephone} onChange={this.handleChangetelephone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-date-input">E-mail</label>
                            <input className="form-control" type="text" value={this.state.email} onChange={this.handleChangeemail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-date-input">Вставьте ссылку на лого компании</label>
                            <input className="form-control" type="text" value={this.state.img} onChange={this.handleChangeimg}/>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example" id="m">
                        <NavLink>
                            <input type="submit" className="btn btn-primary" id="save" value="Сохранить"/>
                        </NavLink>
                        <NavLink tag={Link} to="/companies">
                            <button type="button" className="btn btn-primary" id="cancel">Назад</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
export default UpCompanies;