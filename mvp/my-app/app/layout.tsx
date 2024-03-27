'use client'
import React from 'react';
import { useRouter} from 'next/router';  
import './globals.css';
import './listener';  
import './chatter';  
import './venter';




const Home: React.FC = () => {
      const router = useRouter();


       const handleButtonClick = (buttonType: string) => {
        switch(buttonType) {
          case 'I need to vent😤':  
          router.push('venter')
          break;


          case 'Let me listen😇':
          router.push('listener')
          break;


          case 'Just feel like chatting':
          router.push('chatter')


          break;
          default:


          break
         }
        };  

        return ( 
          
          <div id = "buttons"> 
            <button className = "end-button" onClick = {() => handleButtonClick('I need to vent😤')}>end session</button>
            <button className = "change-button" onClick = {() => handleButtonClick('Let me listen😇')}>change partner</button> 
            <button className = "send-button" onClick = {() => handleButtonClick('Just feel like chatting')}>Send</button>
            
          </div>  
  
      )

      }
    