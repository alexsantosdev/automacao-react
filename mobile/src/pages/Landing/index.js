// @refresh reset
import React, { useEffect } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, YellowBox } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import lightbulb from '../../assets/images/lightbulb.png'
import lightbulbOff from '../../assets/images/lightbulbOff.png'
import television from '../../assets/images/television.png'

import styles from './styles'

import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCCyijKUygZeBhGk4cSslZIJ5wYSxSPPCA",
  authDomain: "automacao-c511a.firebaseapp.com",
  databaseURL: "https://automacao-c511a.firebaseio.com",
  projectId: "automacao-c511a",
  storageBucket: "automacao-c511a.appspot.com",
  messagingSenderId: "211481686007",
  appId: "1:211481686007:web:8e54bc42aea35b0c4b48f2"
};
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

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
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#f5f5f5', '#ffe1d4']}
          style={styles.container}>
          <Text style={styles.title}>Painel de controle</Text>
          <Text style={styles.subtitle}>Quarto</Text>
          <View style={styles.panel}>
            <View style={estado ? styles.boxon : styles.box}>
              <Image source={estado ? lightbulbOff : lightbulb} style={styles.image} />
              <Text style={estado ? styles.boxtitleOff : styles.boxtitle}>Lâmpada</Text>
              <TouchableOpacity onPress={toggleLed} style={estado ? styles.buttontoggleOff : styles.buttontoggleOn}>
                <Text style={styles.buttontext}>{estado ? 'Desligar' : 'Acender'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <Image source={television} style={styles.image} />
              <Text style={styles.boxtitle}>Televisão</Text>
              <TouchableOpacity style={styles.buttontoggleOn}>
                <Text style={styles.buttontext}>Ligar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.subtitle}>Sala</Text>
          <View style={styles.panel}>
            <View style={styles.box}>
              <Image source={lightbulb} style={styles.image} />
              <Text style={styles.boxtitle}>Lâmpada</Text>
              <TouchableOpacity style={styles.buttontoggleOn}>
                <Text style={styles.buttontext}>Acender</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <Image source={television} style={styles.image} />
              <Text style={styles.boxtitle}>Televisão</Text>
              <TouchableOpacity style={styles.buttontoggleOn}>
                <Text style={styles.buttontext}>Ligar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}