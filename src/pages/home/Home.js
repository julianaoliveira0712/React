import React, { Component } from 'react';
import NavBar from "../components/NavBar";

export default class Home extends Component {
    render() {
        return (
            <div className="geral mainBackground">
                <NavBar />
                <section>
                    <span>A conta Banco Digital te dá acesso a um novo patamar de produtos e serviços bancários. Bem vindo ao
                        futuro.</span>
                    <button className="itensHovered btnOutline btnDefault">Continuar</button>
                </section>
            </div>
        );

    }

}
