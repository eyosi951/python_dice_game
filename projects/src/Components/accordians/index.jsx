import data from "./data.js"
import { useState } from "react";
function Accordian(){
     const [selacted, setSelacted]= useState(null);
     const [enableMultiselection , setEnableMultiselection] = useState(false);
     const [multiple, setMultiple]= useState([])

     function handleClicked(i){
           setSelacted(i === selacted ? null : i)
     }
     function handleMultipleSelection(recievedId){
        let cpyMultiple = [... multiple];
        let IndexOfCurrentId = cpyMultiple.indexOf(recievedId)
        if(IndexOfCurrentId === -1)  cpyMultiple.push(recievedId);
        else cpyMultiple.splice(IndexOfCurrentId , 1)
        setMultiple(cpyMultiple)
     }
     console.log(selacted, multiple)



     return(
         <div className="container">
             <button onClick={()=>setEnableMultiselection(!enableMultiselection)}>enable multiple selection</button>
             {
                 data.map((dataItems) => (
                     <div key={dataItems.id} className="lists" onClick={
                        enableMultiselection ?
                         ()=> handleMultipleSelection(dataItems.id):  
                        () => handleClicked(dataItems.id)}>
                         <div className="list">{dataItems.question}
                         </div>
                         <span>+</span>

                          {
                            enableMultiselection ? multiple.indexOf(dataItems.id) !== -1 && 
                            <div className="discription">{dataItems.answer}</div> :
                            selacted === dataItems.id && <div className="discription">{dataItems.answer}</div>
                          }


                         {/*
                             dataItems.id === selacted || multiple.indexOf(dataItems.id) !== -1? 
            <div className="discription">{dataItems.answer}</div>
             : null
                         */}

                     </div>
                 ))
             }
         </div>
     )


}
export default Accordian
