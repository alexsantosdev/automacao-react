import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import Landing from './src/pages/Landing';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <Landing />;
  }else{
    return (
      <>
        <Landing />
        <StatusBar style="auto" />
      </>
    );
  }
}
