import React, { useEffect } from 'react'
import lightbulb from '../../assets/images/lightbulb.svg'
import lightbulbOn from '../../assets/images/lightbulb-on.svg'
import television from '../../assets/images/television.svg'
import televisionOn from '../../assets/images/television-on.svg'
import settings from '../../assets/images/settings.svg'

import './styles.css'

// Firebase SDK
import firebase from 'firebase'
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCCyijKUygZeBhGk4cSslZIJ5wYSxSPPCA",
  authDomain: "automacao-c511a.firebaseapp.com",
  databaseURL: "https://automacao-c511a.firebaseio.com",
  projectId: "automacao-c511a",
  storageBucket: "automacao-c511a.appspot.com",
  messagingSenderId: "211481686007",
  appId: "1:211481686007:web:8e54bc42aea35b0c4b48f2"
};
firebase.initializeApp(firebaseConfig);

var referencia = firebase.database().ref('LED');
var estadoLed = "ON";

const toggleLed = () => {
  if (estadoLed === "ON"){
    referencia.set("ON");
    estadoLed = "OFF"
  }else if (estadoLed === "OFF"){
    referencia.set("OFF");
    estadoLed = "ON";
  }
}

export default function Landing() {
  const [estado, setEstado] = React.useState(false);
  useEffect(() => {
    firebase.database().ref('LED').on('value', snapshot => {
      let l = snapshot.val();
    
      if(l === "ON"){
        setEstado(true)
      }else {
        setEstado(false)
      }
    });
  })

  return(
    <div className="landing-content">
      <div className="row">
        <h2>Painel de controle</h2>
        <img src={settings} alt="Configurações"/>
      </div>
      <span>Quarto</span>
      <div className="panel">
        <div className={estado ? 'boxon' : 'box'}>
          <img src={estado ? lightbulb : lightbulbOn} alt="Lâmpada"/>
          <span>Lâmpada</span>
          <button onClick={toggleLed} className={estado ? 'ligado' : 'desligado'}>{estado ? 'Desligar' : 'Acender'}</button>
          {/* <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" /> */}
        </div>
        <div className="box disabled">
          <img src={television} alt="Televisão"/>
          <span>Televisão</span>
          <button className="testing">Desenvolvendo</button>
          {/* <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" /> */}
        </div>
      </div>
      <span>Sala</span>
      <div className="panel">
      <div className="box disabled">
          <img src={lightbulbOn} alt="Lâmpada"/>
          <span>Lâmpada</span>
          <button className="testing">Desenvolvendo</button>
          {/* <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" /> */}
        </div>
        <div className="box disabled">
          <img src={television} alt="Televisão"/>
          <span>Televisão</span>
          <button className="testing">Desenvolvendo</button>
          {/* <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" /> */}
        </div>
      </div>
    </div>
  );
}