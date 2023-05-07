import React, { useEffect, useState } from "react";


function DoesNotWork() {
  let myNumber = 0;

  function increment() {
    myNumber++;
  }

  return (
    <div>
      <p>{myNumber}</p>
      <button onClick={increment}>Increment!</button>
    </div>
  );
}
function ThisWorks({amount}) {
    // myNumber is the variable itself
    // setMyNumber is a function that lets us update the value
    // useState(0) initializes the React Hook
    // with the starting value of 0
    const [myNumber, setMyNumber] = useState(0);
    amount = Number(amount);
  
    function increment() {
      // Sets the new value to the old value + 1
      if (amount > (myNumber+1)) { 
        setMyNumber(myNumber + 1);
      }
    }

    function decrement() {
      // Sets the new value to the old value - 1
      if ((myNumber-1) >= 0 ) { 
        setMyNumber(myNumber - 1);
      }
    }
    

    return (
      <div>
        <img src={"https://gateway.pinata.cloud/ipfs/QmVPWD2NCjzwLsMN3sgAghHMDPtcHwDtRmqw9J1VyQjies/"+myNumber+".jpg"} alt=""/>
        <p>NFT is : {myNumber}</p>
        <button onClick={increment}> Move_to_next </button>
        <button onClick={decrement}> Move_to_prev </button>
      </div>
    );
  }

export default ThisWorks;