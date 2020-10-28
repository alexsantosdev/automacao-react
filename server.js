var firebase = require("firebase");

// Inicializa Firebase com suas configurações
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

//Cria referência para o nó LED do banco de dados
var referencia = firebase.database().ref('LED');


var five = require("johnny-five");

//Cria objeto para conectar a placa
var board = new five.Board();

//Quando conseguir se conectar a placa, realiza os comandos dentro da 'function()'
board.on("ready", function() {
  var led = new five.Led(2);
  var estadoLed = "OFF";

  //A referência executará a função toda vez que o valor de LED for alterado no banco de dados
  referencia.on('value', (snapshot) => {
    if (snapshot.val() == "ON")
      led.on();
    else
      led.off();
  });

  //setInterval executa a função que inverte o estado do LED em intervalos de 2000ms (2 segundos)
  /*
  setInterval(() => {
    if (estadoLed == "ON"){
      referencia.set("ON");
        estadoLed = "OFF"
    }else if (estadoLed == "OFF"){
      referencia.set("OFF");
        estadoLed = "ON";
    }  
  }, 2000);
  */
});


/*
//Quando o programa iniciar, acessa referência para mudar o valor do led
referencia.once("value")
  .then(function(snapshot) {
    var led = snapshot.val(); //Coleta valor atual do LED
    
    if (led == "OFF") //Se LED for OFF, muda para ON. Quando terminar de alterar, encerra o programa
        referencia.set("ON", () => {process.exit(0)});
    else  //Se LED for ON, muda para OFF. Quando terminar de alterar, encerra o programa
        referencia.set("OFF", () => {process.exit(0)});
});
*/