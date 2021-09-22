import React from 'react';
import '../App.css'
import Button from './Button';
import './Main.css'

function Main(){
    return (
       <div className = 'hero-container'>
           <vidoo src= '/videos/video-2.mp4'/>
           <h1>ADVENTURE AWAITS</h1>
           <p>what are you waiting for</p>
            <Button
            className= 'btns'
            buttonStyle = 'btn--outline'
            buttonSize = 'btn--large'>
                GET STARTED
            </Button>
            <Button
            className= 'btns'
            buttonStyle = 'btn--primary'
            buttonSize = 'btn--large'>
                WATCH TRAILER
            </Button>

            
       </div>
    );
}

export default Main;