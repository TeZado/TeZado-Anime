import React, { Component } from 'react'
import Cards from './components/Cards'
import './App.css'; 
import './index.css'
import Navbar from './components/Navbar';
import RecentEp from './components/RecentEp';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route } from 'react-router';
import Description from './components/Description';
import Footer from './components/Footer';
import Livevideo from './components/Livevideo';
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from "react-scroll-to-top";
import Watch from './components/Watch';



export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <div>
        <LoadingBar
          color='#00FF00'
          progress={this.state.progress}
        /></div>
    
        <Navbar/>
        <Routes>

           <Route  path="/"  element={<Cards setProgress={this.setProgress}/>} />
          <Route path="/RecentEp" element={  <RecentEp setProgress={this.setProgress}/>} />
          <Route path="/:id" element={  <Description setProgress={this.setProgress}/>} />
          <Route path="/RecentEP/:id" element={  <Description setProgress={this.setProgress}/>} />
          <Route path="/Navbar/:id" element={  <Description setProgress={this.setProgress}/>} />
          <Route path="Livevideo"  element={  <Livevideo setProgress={this.setProgress}/>} />
          <Route path="/:id/Watch"  element={  <Watch setProgress={this.setProgress}/>} />
          <Route path="Watch/:id"  element={  <Description setProgress={this.setProgress}/>} />
    
        </Routes>
        <Footer/>
       
    
      </BrowserRouter>
      <ScrollToTop className='toparrow'  color="white" smooth  style={{background: "#708090"}}/>
  
    
  
      </>
    )
  }
}
