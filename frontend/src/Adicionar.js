import React, { Component } from 'react';
import { variables } from './Variables';

export class Adicionar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // populado com dados do API
            users: [],
            // variaveis usadas para janela de modificação
            modalTitle: "",          
            UserId:0,
            UserNumero:"",
            UserUrdideira:"",
            UserOperador:"",
            UserProduto:"",
            UserFornecedor:"",
            UserFio:"",
            UserCorFio:"",
            UserBob:"",
            UserQtdFio:"",
            
            UserMaquina:"",
            
            UserRolos:"",
            UserMetros:"",
            UserData_cadastro: new Date(),
        };

        // bind createClick function to the component instance
        this.createClick = this.createClick.bind(this);
    }

    createClick() {
     
        fetch(variables.API_URL, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                // UserId: this.state.UserId,
                // UserNome: this.state.UserNome,
                // UserSobrenome: this.state.UserSobrenome,
                // UserEmail: this.state.UserEmail,
                // UserData_nascimento: this.state.UserData_nascimento,
                // UserData_cadastro: this.state.currentDate,
                UserId: this.state.UserId,
                UserNumero: '11000' + this.state.UserNumero,
                UserUrdideira: this.state.UserUrdideira,
                UserOperador: this.state.UserOperador,
                UserProduto: this.state.UserProduto,
                UserFornecedor: this.state.UserFornecedor,
                UserFio: this.state.UserFio,
                UserCorFio: this.state.UserCorFio,
                UserBob: this.state.UserBob,
                UserQtdFio: this.state.UserQtdFio,
                UserBarra: this.state.UserBarra,
                UserMaquina: this.state.UserMaquina,
                UserRolos: this.state.UserRolos,
                UserMetros: this.state.UserMetros,
                UserData_cadastro: this.state.currentDate,
                
                
                 
            }
            )

        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert('Falha');
            })
    }

    render() {
        const {
            users,
            UserId,
            UserNumero,
            UserUrdideira,
            UserOperador,
            UserProduto,
            UserFornecedor,
            UserFio,
            UserCorFio,
            UserBob,
            UserQtdFio,
            UserBarra,
            UserMaquina,
            UserRolos,
            UserMetros,
        } = this.state;

        return (
            
            <div className="form-group">
                <br></br>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Numero</span>
                                <input type="text" className="form-control" placeholder='Numero'
                                    value={UserNumero}
                                    onChange={(e) => this.setState({ UserNumero: e.target.value })}
                                ></input>
                                
                                <span className="input-group-text">Urdideira</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserUrdideira}
                                            onChange={(e) => this.setState({ UserUrdideira: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Produto...</option>
                                            <option value="1">1-Polietileno </option>
                                            <option value="2">2-Urdideira Velha</option>
                                            <option value="3">3-Urdideira Nova</option>
                                            {/* Add more options here */}
                                        </select>
                                  
                                     
                                        <span className="input-group-text">Operador</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserOperador}
                                            onChange={(e) => this.setState({ UserOperador: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione </option>
                                            <option value="Antonio">Antonio</option>
                                            <option value="Caio">Caio</option>
                                            <option value="Clovis">Clovis</option>
                                            <option value="Elias">Elias</option>
                                            <option value="Robson">Robson</option>
                                            <option value="Antonio e Caio">Antonio e Caio</option>
                                            <option value="Antonio e Clovis">Antonio e Clovis</option>
                                            <option value="Antonio e Elias">Antonio e Elias</option>
                                            <option value="Antonio e Robson">Antonio e Robson</option>
                                            <option value="Elias e Robson">Elias e Robson</option>
                                            <option value="Caio e Elias">Caio e Elias</option>
                                            <option value="Caio e Clovis">Caio e Clovis</option>
                                            <option value="Clovis e Elias">Clovis e Elias</option>
                                          
                                            {/* Add more options here */}
                                        </select>
                                    
                                    <div className="input-group mb-3"></div>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Produto</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserProduto}
                                            onChange={(e) => this.setState({ UserProduto: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Select Produto</option>
                                            <option value="PA">PA</option>
                                            <option value="PE">PE</option>
                                            <option value="PES">PES</option>
                                            {/* Add more options here */}
                                        </select>
                                    

                                
                                
                                <span className="input-group-text">Fornecedor	</span>
                                <input type="text" className="form-control" 
                                value={UserFornecedor}
                                onChange={(e) => this.setState({ UserFornecedor: e.target.value })}></input>

                                <div className="input-group mb-3"></div>
                                <span className="input-group-text">Fio	</span>
                                <input type="text" className="form-control" 
                                value={UserFio}
                                onChange={(e) => this.setState({ UserFio: e.target.value })}></input>

                                
                                
                                    <span className="input-group-text">CorFio</span>    
                                        <select
                                            className="form-select"
                                            value={this.state.UserCorFio}
                                            onChange={(e) => this.setState({ UserCorFio: e.target.value })}
                                            placeholder='Select'
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">CorFio</option>
                                            <option value="Branco">Branco</option>
                                            <option value="Preto">Preto</option>
                                       
                                            {/* Add more options here */}
                                        </select>
                               
                                        <span className="input-group-text">BoB</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserBob}
                                            onChange={(e) => this.setState({ UserBob: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Grupo</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            {/* Add more options here */}
                                        </select>
                                    
                              

                                
                                <span className="input-group-text">Qtd Fio	</span>
                                <input type="text" className="form-control" 
                                value={UserQtdFio}
                                onChange={(e) => this.setState({ UserQtdFio: e.target.value })}></input>

                                
                                <span className="input-group-text">Barra</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserBarra}
                                            onChange={(e) => this.setState({ UserBarra: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione a product...</option>
                                            <option value="1|2">1 e 2 </option>
                                            <option value="1|2|3">1, 2 e 3 </option>
                                            <option value="3|4">3 e 4</option>
                                            <option value="5|6">5 e 6</option>
                                            <option value="4|5|6">4, 5 e 6</option>
                                            {/* Add more options here */}
                                        </select>
                                

                                <div className="input-group mb-3"></div>
                                           <span className="input-group-text">Maquinas</span>
                                        <select
                                            className="form-select"
                                            value={this.state.UserMaquina}
                                            onChange={(e) => this.setState({ UserMaquina: e.target.value })}
                                        >
                                            {/* Add the options dynamically from your API or other data source */}
                                            <option value="">Selecione Maquina...</option>
                                            <option value="1">M1 </option>
                                            <option value="3">M3</option>
                                            <option value="4">M4</option>
                                            <option value="5">M5 </option>
                                            <option value="6">M6</option>
                                            <option value="7">M7</option>
                                            <option value="8">M8 </option>
                                            <option value="9">M9</option>
                                            <option value="10">M10</option>
                                            <option value="11">M11 </option>
                                            <option value="12">M12</option>
                                            <option value="14">M14</option>
                                            <option value="15">M15 </option>
                                            {/* Add more options here */}
                                        </select>
                                    
                                

                                
                                <span className="input-group-text">Rolos	</span>
                                <input type="text" className="form-control" 
                                value={UserRolos}
                                onChange={(e) => this.setState({ UserRolos: e.target.value })}></input>

                                
                                <span className="input-group-text">Metros	</span>
                                <input type="text" className="form-control" 
                                value={UserMetros}
                                onChange={(e) => this.setState({ UserMetros: e.target.value })}></input>

                                


                                <button type="button"
                                    className="btn btn-primary float-start" onClick={() => this.createClick()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>


            {/* )} */}
        </div></div>

    )
    }}

