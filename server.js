var firebase = require("firebase");

// Inicializa Firebase com suas configurações
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABSE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
firebase.initializeApp(firebaseConfig);

//Cria referência para o nó LED do banco de dados
var referencia = firebase.database().ref('LED');


var five = require("johnny-five");

//Cria objeto para conectar a placa
var board = new five.Board();

//Quando conseguir se conectar a placa, realiza os comandos dentro da 'function()'
board.on("ready", function() {
  var relay = new five.Relay(8);
  var estadoLed = "OFF";

  //A referência executará a função toda vez que o valor de LED for alterado no banco de dados
  referencia.on('value', (snapshot) => {
    if (snapshot.val() == "ON")
      relay.open();
    else
      relay.close();
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