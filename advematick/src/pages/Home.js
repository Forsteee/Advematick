import React, { Component } from 'react';
import './Home.css';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Home extends Component {
    static displayName = Home.name;
/*   <h1>Прогресс задания: создание новой записи (не создаёт т.к. идшник не генерится постгресом)
                        Создать форму форму структуры предприятия 9я форма (если считать чисто формами (файлами) то уже 10 форм без этой)
                    </h1>
*/
    render() {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 m-3" >
                            <h1>Вход</h1>
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm col-form-label">Email</label>
                                    <div className="col-sm">
                                        <input type="email" className="form-control-sm" id=""/>
                                    </div>
                                    <label className="col-sm col-form-label">Пароль</label>
                                    <div className="col-sm">
                                        <input type="password" className="form-control-sm" id=""/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm offset-sm">
                                        <button type="submit" className="btn btn-primary">Войти</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                            <div className="col-5 mt-3  m-auto">
                            <h1>Регистрация</h1>
                            <form>
                                <div className="form-group pt-5">
                                    <label htmlFor="formGroupExampleInput">Логин</label>
                                    <input type="text" className="form-control col-1" id=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">E-mail</label>
                                    <input type="email" className="form-control col-1" id=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Пароль</label>
                                    <input type="password" className="form-control col-1" id=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Код доступа</label>
                                    <input type="number" className="form-control col-1" id=""/>
                                </div>
                                <div className="btn-group" role="group" aria-label="Basic example" id="">
                                        <input type="submit" className="btn btn-primary" id="" value="Зарегистрироваться"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}
export default Home;
