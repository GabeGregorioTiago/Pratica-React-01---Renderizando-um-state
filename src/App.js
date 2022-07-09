// Crie uma class component 

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

import React, { Component} from 'react';
import logo from './fruta_favorita.jpeg';
//import './App.css';
//import ProgressiveImage from "react-progressive-image";



//<img src={logo} className="App-logo" alt="logo" />
class dados extends Component {

    state = {
       sobre:{
           nome:'Gabriel',
           idade: 24,
           comida: 'Baião de dois',
           musica:["Sugar we're going down","I write sins, not tragedies","New perspective"] 
         }

       };
      
       
    
      render() {
        return (
           <div>
              <h1>Meu nome é {this.state.sobre.nome}</h1>
              <h2>Tenho {this.state.sobre.idade} anos</h2>
               <h3>Minha comida favorita é {this.state.sobre.comida}</h3>
              <nav>
                <ul>
                  <li>{this.state.sobre.musica[0]}</li>
                  <li>{this.state.sobre.musica[1]}</li>
                  <li>{this.state.sobre.musica[2]}</li>
                </ul>
              </nav>
              <figure>
                 <img src={logo} alt="Banana, a minha fruta favorita"></img>
              </figure>
              
           </div>


        )
         
    }

}

export default dados;


//**Bônus
// Adicione uma imagem da sua fruta favorita via import

