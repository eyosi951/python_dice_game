import { useState } from "react";

export default function RandomColorGenerator(){
    const [typeOfColor, setTypeOfColor]= useState("hex");
    const [color, setColor]= useState("#000000");

    function handleUtility(length){
        return  Math.floor(Math.random()*length)
    
        }

    function generateRandomHexColor(){
        const hex= [ 0,1,2,3,4,5,6,7,8,9,"A","B",'C','D','E','F'];
        let hexColor= "#"

        for(let i=0; i< 6; i++){
            hexColor += hex[handleUtility(hex.length)]
        }
         setColor(hexColor)
          
    }
    function generateRandomRgbColor(){
         let r = handleUtility(256);
         let g = handleUtility(256);
         let b = handleUtility(256);

          setColor(`rgb(${r},${g},${b})`) ;
    }
    


    return <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color
    }}>
        <button onClick={()=> setTypeOfColor('hex')}>generate hex color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>generate rgb color</button>
        <button onClick={typeOfColor === 'hex'? generateRandomHexColor : generateRandomRgbColor}>generate random color</button>
       <div>
        <h1>{typeOfColor}</h1>
        <h1>{color}</h1>
       </div>
    </div>
}