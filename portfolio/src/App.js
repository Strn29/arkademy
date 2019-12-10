import React, { Component } from 'react';
import Background from './bgmoss.png';


class Praktek extends Component {
  render() {
     return(
      <div style={style.background}>             
        <div style={style.text}>
          <p style={{alignSelf: "left"}}>Go Green</p>
        </div>
          <div style={style.quotes}>
            <h1 style={{alignSelf: "center", marginLet: "60"}}>Make it green</h1>
              <span>Now more than ever. Our planet is need our</span>
          </div>        
                
      </div>
      );
  }
}

let h = window.innerHeight;
let w = window.innerWidth;
const style = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItem: "center",
        left: 0,
        top: 0,
        position: "absolute"
    },
    text: {
        color: "white",
        fontFamily: "Poppins",
        top: 10,
        left: 30,
        border: 3, 
        position: "absolute"
    },
    quotes: {
        justifyContent: "center",
        flexDirection: "column",
        alignItem: "center",
        color: '#FFFFFF',
        fontFamily: "Poppins",
        textAlign: "center",
        position: "absolute",
        textAlign: "center",
        padding: 200,
        fontSize: 24,
    },
   
}

export default Praktek;