/*
You should use the useEffect hook to manage the countdown timer.

Your OTPGenerator component should return a div element with the class name container.

The div having the class container should include the following elements:

An h1 element with the ID otp-title and text "OTP Generator".
An h2 element with the ID otp-display that either displays the message "Click 'Generate OTP' to get a code" or shows the generated OTP if one is available.
A p element with the ID otp-timer and aria-live attribute set to a valid value that:
Starts off empty.
Displays "Expires in: X seconds" after the button is clicked, where X represents the remaining time before the OTP expires.
Shows the message "OTP expired. Click the button to generate a new OTP." once the countdown reaches 0.
A button element with the ID generate-otp-button labeled "Generate OTP". When clicked, it should generate a new OTP and start a 5-second countdown.
The "Generate OTP" button must be disabled while the countdown is active.
You should ensure the countdown timer stops automatically once it reaches 0 seconds to prevent unnecessary updates.

The generated OTP should be 6 digits long.


*/

import { useState, useEffect, useRef } from 'react';


export default function OTPGenerator(){

  const [isOTPReady,setIsOTPReady] = useState(true)
  const [otp,setOtp] = useState("Click 'Generate OTP' to get a code");
  const [timer,setTimer] = useState(0)
  const countDownRef = useRef(null)

  function generateOTP(){
    setTimer(5)
    setIsOTPReady(false);
    var sigDigits = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setOtp(sigDigits)
    countDownRef.current = setInterval(()=>{
      setTimer(timer => timer - 1)
    },1000)
    setTimeout(()=>{
      setIsOTPReady(true);
    },5000)
  }

  useEffect(() =>{
    if(countDownRef.current && timer === 0){
      clearInterval(countDownRef.current);
    }
  },[timer])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp}</h2>
      <p id="otp-timer" aria-live="assertive">
      {countDownRef.current == null?'':(
           timer > 0 ? `Expires in: ${timer} seconds` :"OTP expired. Click the button to generate a new OTP."
      )}
      </p>
      <button id="generate-otp-button" onClick={generateOTP} disabled={!isOTPReady}>Generate OTP</button>
    </div>
  )
};