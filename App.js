import React from "react";
import {Text} from "react-native"
import {WebView} from "react-native-webview"

const MyApp = ()=>{
  return <WebView source={{ uri: 'https://google.com' }} />
}

export default MyApp;