import { Component } from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './components/Show'
import TextLength from "./components/TextLength";


class App extends Component{
  constructor(){
      super()
  }

  state={
      name: `Precious`,
      stater: `Imo`,
      location: `Ikorodu`
  }

  theListener(event){
      this.setState({
          name: event.target.value.length,
          stater:`lag`
      })
  }

 

  render(){
    return(
      <>
        <h1>Text Length Checker</h1>
        <div className="parentContainer">
          <Show detail={()=>{this.theListener(event)}} length={this.state.name}></Show>
          <TextLength length={this.state.name} ></TextLength>
        </div>
        
      </>
    )
  }
}
export default App
